# Motion Mutum Estúdio — site

Landing page estática do estúdio, publicada via GitHub Pages.

## Estrutura

```
index.html      → estrutura HTML da página
styles.css      → todo o CSS (variáveis de cor/fonte no topo, depois os componentes)
script.js       → toda a lógica (troca PT/EN/ES, menu mobile, wishlist)
assets/         → imagens usadas pelo site (logo, ave, etc.)
.nojekyll       → avisa ao GitHub Pages para não rodar o processamento Jekyll
```

## Como atualizar o site

1. Edite `index.html` (conteúdo/estrutura), `styles.css` (visual) ou `script.js`
   (comportamento), conforme o caso.
   - Textos em português ficam no conteúdo visível de cada elemento; as versões em
     inglês e espanhol ficam nos atributos `data-en="..."` e `data-es="..."` do
     mesmo elemento (usados pelo seletor PT/EN/ES no menu) — ao adicionar um texto
     novo, inclua os três.
   - As cores e fontes da marca ficam centralizadas no topo de `styles.css`,
     no bloco `:root { --ink: ...; --red: ...; ... }` — mudar uma cor ali reflete
     em todos os componentes que a usam.
   - Os blocos cinza tracejados ("Screenshot 01", "Foto do estúdio", etc.) são
     placeholders de imagem — quando tiver a arte/foto final, troque a `<div class="img-slot">...</div>`
     correspondente por uma tag `<img src="assets/nome-do-arquivo.png" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`
     e coloque o arquivo de imagem dentro de `assets/`.
2. Para conferir localmente antes de publicar, abra o `index.html` direto no
   navegador (duplo clique) ou rode um servidor simples, por exemplo:
   ```
   npx serve .
   ```
3. Salve, confirme as mudanças no Git e envie para o GitHub:
   ```
   git add .
   git commit -m "Atualiza site"
   git push
   ```
4. O GitHub Pages publica automaticamente a nova versão em ~1 minuto após o push.

## Sobre a seção de contato

A seção "Contato" não tem mais formulário — por enquanto o contato é feito
direto pelas redes sociais e pelo e-mail (motionmutum@gmail.com), destacados
em `.social-spotlight`. Os links de Instagram, YouTube, Itch.io e Discord
ainda estão como placeholder (`href="#"`) em `index.html` — troque pelas URLs
reais assim que as contas existirem.
