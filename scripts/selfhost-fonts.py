"""Baixa as fontes do Google Fonts para dentro do repositorio.

Por que: carregar fontes direto de fonts.googleapis.com envia o IP de cada visitante
para o Google antes de qualquer consentimento — foi exatamente isso que um tribunal de
Munique considerou violacao do RGPD em 2022. Servindo os arquivos junto com o site,
abrir a pagina nao aciona ninguem alem da nossa hospedagem.

Gera assets/fonts.css e assets/fonts/*.woff2. Rode de novo se as familias ou os pesos
mudarem, e depois confira que styles.css continua usando os mesmos nomes de familia:

    python scripts/selfhost-fonts.py

Mantem so os subsets latin e latin-ext, suficientes para PT/EN/ES. As familias sao
variaveis, entao o mesmo arquivo costuma cobrir varios pesos — o script deduplica por
URL e reaproveita o nome do arquivo ja baixado.
"""
import re
import pathlib
import urllib.request

GOOGLE_CSS = (
    "https://fonts.googleapis.com/css2"
    "?family=Press+Start+2P"
    "&family=Fredoka:wght@400;500;600;700"
    "&family=Nunito+Sans:ital,opsz,wght@0,6..12,400;0,6..12,600;0,6..12,700;0,6..12,800;0,6..12,900"
    "&display=swap"
)
# sem User-Agent de navegador o Google devolve .ttf em vez de .woff2
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0 Safari/537.36")
KEEP = {"/* latin */", "/* latin-ext */"}

PROJECT = pathlib.Path(__file__).resolve().parent.parent
FONTS_DIR = PROJECT / "assets" / "fonts"


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    return urllib.request.urlopen(req, timeout=60).read()


def main():
    FONTS_DIR.mkdir(parents=True, exist_ok=True)
    css = fetch(GOOGLE_CSS).decode("utf-8")
    blocks = re.findall(r"(/\* [a-z-]+ \*/)\n(@font-face \{.*?\n\})", css, re.S)

    out = []
    downloaded = {}
    for comment, block in blocks:
        if comment not in KEEP:
            continue
        family = re.search(r"font-family: '([^']+)'", block).group(1)
        weight = re.search(r"font-weight: (\d+)", block).group(1)
        subset = comment.strip("/* ").strip(" */")
        url = re.search(r"url\((https://[^)]+)\)", block).group(1)

        slug = family.lower().replace(" ", "-")
        if url in downloaded:
            name = downloaded[url][0]
        else:
            name = f"{slug}-{subset}.woff2"
            if any(n == name for n, _ in downloaded.values()):
                name = f"{slug}-{weight}-{subset}.woff2"
            data = fetch(url)
            (FONTS_DIR / name).write_bytes(data)
            downloaded[url] = (name, len(data))
            print(f"  {name:38s} {len(data)/1024:6.1f} KB")

        out.append(f"{comment}\n{block.replace(url, f'fonts/{name}')}")

    header = (
        "/* GERADO por scripts/selfhost-fonts.py — nao editar a mao.\n"
        "   Fontes servidas pelo proprio site para que nenhum IP de visitante chegue\n"
        "   ao Google sem consentimento (RGPD). Subsets: latin e latin-ext.\n"
        "   Os caminhos sao relativos a assets/, onde este arquivo mora. */\n\n"
    )
    (PROJECT / "assets" / "fonts.css").write_text(header + "\n".join(out) + "\n", encoding="utf-8")

    total = sum(size for _, size in downloaded.values())
    print(f"\n{len(out)} declaracoes @font-face, {len(downloaded)} arquivos, {total/1024:.1f} KB")


if __name__ == "__main__":
    main()
