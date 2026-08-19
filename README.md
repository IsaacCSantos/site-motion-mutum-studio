# Motion Mutum Estúdio — site

Landing page estática do estúdio, publicada via GitHub Pages.

## Estrutura

```
index.html      → estrutura HTML da página
styles.css      → todo o CSS (variáveis de cor/fonte no topo, depois os componentes)
script.js       → toda a lógica (troca PT/EN/ES, menu mobile, consentimento/GA4)
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
   - Todo espaço de imagem que ainda não tem arte final mostra a placa "estamos
     em reforma" (`assets/em-desenvolvimento.png`), com este bloco:
     ```html
     <div class="wip">
       <img src="assets/em-desenvolvimento.png" alt="Mutum de capacete segurando uma placa: estamos em reforma">
       <span class="wip-badge" data-en="IN DEVELOPMENT" data-es="EN DESARROLLO">EM DESENVOLVIMENTO</span>
     </div>
     ```
     Em espaços baixos (as miniaturas de screenshot) use `class="wip wip--compact"`,
     que esconde a etiqueta e dá mais espaço à ilustração. O fundo da placa é
     exatamente a cor `--stone`, a mesma do bloco `.wip`, então a arte se funde
     com o espaço sem emenda visível.
   - Quando a arte final chegar, troque o `<div class="wip">...</div>` (ou um
     `<div class="img-slot">`, se ainda restar algum) por
     `<img class="slot-img" src="assets/nome-do-arquivo.jpg" alt="...">` e coloque
     o arquivo dentro de `assets/`. A classe `.slot-img` já preenche o espaço todo
     com `object-fit:cover`.
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
em `.social-spotlight`. Instagram, YouTube e Itch.io já apontam para as contas
reais; o Discord foi removido do site enquanto não existir servidor.
