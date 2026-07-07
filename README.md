# Motion Mutum Estúdio — site

Landing page estática do estúdio, publicada via GitHub Pages.

## Estrutura

```
index.html      → a página do site (HTML + CSS + JS puros, sem build/framework)
assets/         → imagens usadas pelo site (logo, ave, etc.)
source/         → arquivos originais exportados da ferramenta de design usada para
                  prototipar o layout (Motion Mutum - Landing.dc.html e afins).
                  Não são usados pelo site publicado — servem só de referência/histórico.
.nojekyll       → avisa ao GitHub Pages para não rodar o processamento Jekyll
```

## Como atualizar o site

1. Edite `index.html` diretamente (ou os arquivos em `assets/`).
   - Textos em português ficam no conteúdo visível de cada elemento; a versão em
     inglês fica no atributo `data-en="..."` do mesmo elemento (usado pelo botão
     PT/EN no menu).
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

## Sobre o formulário de contato

O formulário da seção "Contato" hoje só mostra uma confirmação visual
("Mensagem enviada") no navegador — como o GitHub Pages não roda backend,
nenhum e-mail é enviado de fato. Para receber as mensagens de verdade no
futuro, dá para plugar um serviço gratuito como o
[Formspree](https://formspree.io) ou o [Getform](https://getform.io) sem
precisar de servidor próprio.
