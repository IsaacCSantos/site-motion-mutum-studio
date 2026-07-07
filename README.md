# Motion Mutum Estúdio — site

Landing page estática do estúdio, publicada via GitHub Pages.

## Estrutura

```
index.html      → estrutura HTML da página
styles.css      → todo o CSS (variáveis de cor/fonte no topo, depois os componentes)
script.js       → toda a lógica (troca PT/EN, menu mobile, wishlist, formulário)
assets/         → imagens usadas pelo site (logo, ave, etc.)
.nojekyll       → avisa ao GitHub Pages para não rodar o processamento Jekyll
```

## Como atualizar o site

1. Edite `index.html` (conteúdo/estrutura), `styles.css` (visual) ou `script.js`
   (comportamento), conforme o caso.
   - Textos em português ficam no conteúdo visível de cada elemento; a versão em
     inglês fica no atributo `data-en="..."` do mesmo elemento (usado pelo botão
     PT/EN no menu).
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

## Sobre o formulário de contato

O formulário da seção "Contato" hoje só mostra uma confirmação visual
("Mensagem enviada") no navegador — como o GitHub Pages não roda backend,
nenhum e-mail é enviado de fato. Para receber as mensagens de verdade no
futuro, dá para plugar um serviço gratuito como o
[Formspree](https://formspree.io) ou o [Getform](https://getform.io) sem
precisar de servidor próprio.
