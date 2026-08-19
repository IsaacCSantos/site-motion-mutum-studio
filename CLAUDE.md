# Motion Mutum Estúdio — Brief do projeto

Estúdio indie de jogos e curtas de animação, em **Coruripe, interior de Alagoas**.
Iniciativa privada com apoio da **Prefeitura de Coruripe / Secretaria Municipal de Cultura**
(cede espaço; contrapartida = palestras, workshops e o Cineclube da Biblioteca Municipal).
Missão: propagar arte e cultura pelo audiovisual e games, formando profissionais locais.

Nome = referência ao **mutum-de-alagoas**, ave-símbolo do estado. Cores = bandeira de Alagoas
(vermelho / branco / azul) + dourado + preto quente.

## Sistema visual (já aplicado na landing)
- Cores: vermelho #E23A2E, azul #2A3BC4, dourado #F4B12A, preto quente #1A1512, creme #F6EDD9, pedra #C7BFB0.
- Duas cores entraram depois, fora da bandeira, e são **deliberadas** — não "corrigir" para
  a paleta original:
  - **ardósia #73838F** (`--slate`): o cinza do disco atrás da logo na arte da marca. Usada
    nas placas da logo (hero e rodapé) e nos cards da equipe. Ver a nota de contraste do logo
    logo abaixo — ela é o motivo técnico, não só gosto.
  - **gradiente verde** (`--grad-evolua`): fundo do card do EVOLUA!, replicado em CSS a partir
    de um PNG da apresentação. Existe só ali, e combina com o tema de biomas do jogo.
- Fontes: Press Start 2P (arcade/acentos), Fredoka (títulos), Nunito Sans (corpo).
- Componentes pixel: bordas 3px ink, sombras duras offset, sem raio. **Exceção:** o avatar da
  equipe (`.team-avatar`) tem cantos arredondados de propósito, para acompanhar a forma do
  recorte na arte conceitual dos fundadores.
- Logo (versão reformulada, ago/2026): assets/mutum-logo.png (lockup). O ícone da ave
  (assets/mutum-bird.png, usado no header e no favicon) segue sendo o da versão anterior,
  por preferência da equipe — não regerar a partir do lockup novo. A cauda do lockup tem
  agora as três penas da bandeira —
  vermelho #E00109, branco, azul #0095D4 — e esse azul do logo é mais claro que o --blue
  (#2A3BC4) usado nos componentes do site; é proposital, não "corrigir" um pelo outro.
- **Contraste do lockup:** ele tem elementos pretos e brancos ao mesmo tempo, então qualquer
  placa atrás dele é um compromisso. Medido: sobre pedra #C7BFB0 o preto dá 11.6:1 mas o
  branco só 1.8:1 (o contorno branco quase some); sobre ardósia #73838F fica 5.4:1 e 3.9:1.
  Por isso as placas migraram para o ardósia. Fundo claro ou escuro puro é pior que os dois.
- Placeholder oficial: assets/em-desenvolvimento.png (mutum de capacete com a placa
  "estamos em reforma"), recolorido para a paleta da marca. **O fundo dele é transparente**
  (era #C7BFB0 chapado até ago/2026) — quem pinta o fundo agora é o bloco `.wip`, que usa
  `var(--stone)`. Trocar a cor por trás do placeholder é mexer no `.wip`, não no PNG.
  Ver README para o markup.
- Site é trilíngue PT/EN/ES (atributos data-en / data-es + botão no menu). **Ao editar
  qualquer texto em português, atualizar data-en e data-es na mesma passada.** Já aconteceu
  de o PT mudar e as traduções ficarem descrevendo um estúdio diferente por semanas.

## Equipe (4 fundadores)
Cargos **como aparecem no site** (definidos pela arte conceitual, ago/2026), seguidos das
credenciais completas. **As credenciais não estão publicadas** — o site mostra só nome e
cargo. Este arquivo é a única fonte delas; se um dia voltarem para a landing, é daqui.

- **Cássio Januário** — *Game Artist e Animador*. Bacharel Análise de Sistemas; arte/ilustração (pintura, gravura, digital); curta stop-motion "Tupi Or Not Tupi" (Anima Cine Sesi 2016).
- **Erivelto Souza** — *Concept Artist e Animador*. Licenciado em Ciências Biológicas (herpetologia, ornitologia, paleontologia); roteirista e poeta; ilustração científica/didática, quadrinhos, animação 2D, stop motion, escultura (Museu de História UFAL, Museu da Mata Atlântica).
- **Isaac Santos** — *Programador e Animador*. Bacharel Análise e Desenvolvimento de Sistemas; programação, engenharia de software, dev de jogos, modelagem 3D, web design.
- **Thiago Rodrigues** — *Producer e Animador*. Estudante de Licenciatura em História; programação, arte e modelagem 3D; também no "Tupi Or Not Tupi" (2016).

Os nomes no site perderam a inicial do meio ("Isaac C." → "Isaac", "Thiago O." → "Thiago")
para bater com a arte conceitual.

**Como o card da equipe é montado:** foto em cima, ovo embaixo. Os ovos (assets/ovo-1..4.png)
foram extraídos dos slides conceituais **sem o texto**, que é renderizado em HTML por cima —
senão nome e cargo não seriam traduzíveis nem selecionáveis. São quatro arquivos porque cada
ovo tem uma rachadura diferente. As fotos foram reenquadradas para o maior retângulo de
cantos arredondados inscrito na elipse original; se mudar o raio em `.team-avatar`, as fotos
precisam ser reexportadas junto, ou os cantos brancos do recorte aparecem.

## Jogo EVOLUA!
- **Gênero: Infinity running.** **Plataformas: PC / Mobile.** (Era descrito como
  "Running / Plataforma" até ago/2026; a parte de plataforma saiu.)
- Ambientado no **final do Cretáceo**, era dos dinossauros, perto da Grande Extinção.
- Protagonista: uma **ave ancestral de todas as aves atuais**, com habilidade metamórfica —
  assume a forma de outras aves conforme a **semente** que come.
- Aliado: um **pequeno mamífero pré-histórico** que também se transforma em outros mamíferos.
  **Não é mencionado no site** — saiu da sinopse na reescrita de ago/2026. Confirmar com a
  equipe se ele continua no design do jogo antes de recolocá-lo.
- Objetivo: atravessar **biomas**, escapar de dinossauros, crocodilos e outras feras, e
  **voltar ao ninho**.
- Tema: **evolução por seleção natural**, visão lúdica e educativa; personagens inspirados em
  espécies brasileiras (pré-históricas e atuais). Refs de infância do criador: Bomberman, Sonic,
  Mario; atuais: Gris, Attack the Light.
- Tags do card: EVOLUÇÃO / INFINITY RUNNING / PC · MOBILE — tema, gênero, plataformas.
  A tag "ARTE DIGITAL" foi substituída por "EVOLUÇÃO"; a técnica não é mais citada em lugar nenhum.
- **Está no ar** em https://motionmutum.itch.io/evolua — protótipo HTML5, grátis, jogável no
  navegador; só a Fase 1 (a corrida). O CTA do card leva para lá (`#itchBtn`, com o logo do
  itch.io em SVG inline). Substituiu o botão de wishlist, que era decorativo — nunca houve
  loja onde adicionar.
- **O jogo não roda dentro do site** — decisão da equipe (ago/2026). Chegou a existir um
  player na página (`.play-frame`) e ele foi removido; ver a nota no fim das Pendências
  antes de refazer, porque a versão que existia já resolvia o problema de privacidade.

**Restrição de contraste do card — não escurecer o gradiente.** O card empilha o logo do jogo
sobre a sinopse, e os dois pedem fundo **claro**: as letras azul-escuras do logo (#004894) caem
abaixo de 3:1 a partir de #4DAA8A, e é o logo que limita, não o texto (preto aguentaria até
#268D7C). Texto claro sobre fundo escuro resolveria a sinopse mas apagaria o logo. Uma varredura
de todas as posições de parada do gradiente não achou nenhuma que atendesse os dois com texto
creme. Por isso `--grad-evolua` termina em #4DAA8A e a sinopse é preta.
Se algum dia quiserem o verde profundo de volta, o caminho é dar ao logo uma placa clara
própria, isolando-o do gradiente — aí o fundo pode escurecer e o texto vira creme.

## Curtas e documentários
A seção `#anim` cobre **curtas de animação e documentários**. Dois títulos anunciados:
- **A Jornada Angatu** — curta animado.
- **Depois do Dodô** — curta documental.

Títulos ficam em português nas três línguas (é obra, não interface) — só o status é traduzido.
Havia um terceiro card "título a definir", removido em ago/2026; a grade usa
`.shot-grid--duo` (2 colunas) por causa disso. Se entrar um terceiro curta, tirar essa classe.

## Pendências
1. Página **Design System** (paleta, tipografia, catálogo de componentes pixel).
2. Arte final para os espaços que ainda mostram a placa "em desenvolvimento":
   showreel, os 2 curtas e 2 das 3 miniaturas de screenshot do EVOLUA!.
3. **Conteúdo removido do site que talvez devesse voltar** (decisão da equipe, não bug):
   - As 4 biografias dos fundadores — credenciais, "Tupi Or Not Tupi", museus do Erivelto.
     Publisher e festival, os públicos que a seção de contato chama, são justamente quem lê isso.
   - A menção ao **apoio da Prefeitura / Secretaria de Cultura e ao Cineclube**. Era a única
     prova pública da parceria que cede o espaço do estúdio, e sumiu do site inteiro.
   - O **player do EVOLUA! na própria página** — o protótipo jogável rodando dentro do site,
     em vez de só o link para o itch.io. Foi construído e removido no mesmo dia (ago/2026),
     "por enquanto". Se voltar, **não colar a tag `<iframe>` crua**: o que existia era uma
     fachada — um bloco `.play-frame` com logo, botão e aviso, e o `<iframe>` criado por JS
     só no clique, para que nenhum IP de visitante chegue ao itch.io sem que ele tenha
     pedido (mesma razão das fontes auto-hospedadas). O embed é
     `https://itch.io/embed-upload/18871960?color=f0c0a8`, 980×620 — limitar a caixa a
     980px evita ampliar o jogo acima da resolução nativa. **Esse código nunca foi commitado**,
     então não há o que reverter: estes parágrafos são a fonte para refazer. Voltando, refazer
     também o evento `game_play` no GA4 e o parágrafo "Outros serviços" de privacidade.html,
     que hoje afirma que **nada** fica embutido na página.
4. **CSS morto** — regras sem uso após as remoções de texto: `.games-summary`, `.studio-note`,
   `.team-lede`, `.evolua-sublede`, `.contact-lede`, `.short-status--outline`,
   `.social-card--outline`. E, de antes: `.btn--submit` + regras de `input`/`textarea`
   (não existe formulário no HTML), `.img-slot`, `.img-slot--sm`, `.showreel-overlay`,
   `.play-btn`. As duas últimas parecem reservadas para o showreel real.
5. Assets órfãos: `assets/cassio-januario.png` e `assets/erivelto-souza.png`, substituídos
   pelos `.jpg` na troca de ago/2026.
6. Discord foi **removido** do site (cards e rodapé) — não havia URL real. Se a comunidade
   for criada, recolocar em index.html e na lista de serviços de privacidade.html.

## Analytics
Duas camadas, de propósito. GitHub Pages não dá analytics nenhum — *Insights → Traffic*
mede só o repositório no github.com, não o site publicado.

- **Cloudflare Web Analytics** — sem cookie, sem banner, roda sempre. É o número
  **oficial** de audiência, porque conta inclusive quem recusa o GA4. Beacon no fim do
  index.html e do privacidade.html; o token é identificador público e pode ficar
  versionado (API Token da Cloudflare, esse jamais).
- **GA4** (`G-NF072C103G`, em `GA_MEASUREMENT_ID` no topo do script.js) — só de quem
  aceita. Serve para comportamento e campanha, não para volume.

**Os dois números nunca vão bater** — 30 a 50% de diferença é normal (recusa de
consentimento + bloqueadores + definições diferentes de sessão). Não reconciliar, não
tirar média: volume sai da Cloudflare, comportamento sai do GA4.

Consent Mode v2 em **modo básico**: o gtag.js só é baixado depois do "Aceitar", então
nenhum pedido chega ao Google sem consentimento. O modo avançado daria modelagem do
tráfego recusado, mas ela exige ~1000 eventos/dia — longe da realidade atual. Trocar
depois é uma linha em `loadGa()`.

Banner em index.html (dentro do `#app`, para o `setLang()` traduzir junto). **Aceitar e
Recusar têm peso visual idêntico de propósito** — exigência do GDPR contra dark pattern;
não "melhorar" deixando o Aceitar maior. Página de política: privacidade.html, trilíngue,
com botão de revogar. Eventos personalizados em script.js (idioma, `itch_click`, links
externos, visualização da seção EVOLUA!) — sem eles o GA4 veria só 1 pageview, já que o
site é uma página só.

No painel do GA4: retenção em 14 meses (a política promete isso) e Sinais do Google
desativado (contradiria os defaults de consentimento).

**Fontes são auto-hospedadas** (assets/fonts.css + assets/fonts/*.woff2, gerados por
`python scripts/selfhost-fonts.py`). Não voltar a linkar fonts.googleapis.com: isso
manda o IP de todo visitante ao Google antes de qualquer consentimento — o caso que um
tribunal de Munique julgou violação do RGPD em 2022. Só subsets latin/latin-ext.

Já feitos: seção EVOLUA! com gênero/plataformas/sinopse corretos e logo do jogo no lugar do
título em texto (assets/evolua-logo.png), seção Equipe com os 4 fundadores no formato foto+ovo,
logo reformulado e key art do EVOLUA! (bioma deserto — assets/evolua-deserto.jpg e o recorte
assets/evolua-deserto-detalhe.jpg), curtas com títulos reais.

## Como ver o site renderizado (dá, sim)
Existe Chrome nesta máquina e ele tira print sem abrir janela:

```
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu \
  --hide-scrollbars --virtual-time-budget=5000 --window-size=1400,4200 \
  --screenshot=saida.png "file:///C:/Users/Casa/Documents/Projetos/Motion%20Mutum%20est%C3%BAdio/index.html"
```

Duas armadilhas achadas na marra:
- **O headless não desce abaixo de ~500px de largura.** Pedir `--window-size=390` gera uma
  imagem de 390px, mas o layout continua sendo calculado a 500 e a imagem sai *cortada* —
  parece estouro horizontal e não é. Para testar celular, use 500 e recorte com PIL.
- **O beacon da Cloudflare segura o evento `load`** offline (a requisição não resolve). Se
  for injetar script de teste, use `DOMContentLoaded`, ou tire o beacon da cópia de teste.

Para testar EN/ES ou o clique no player, copie o index.html para um `_probe.html`, injete
um `<script>` antes de `</body>` que dispare `.lang-btn[data-lang="es"].click()` ou
`#playBtn.click()`, tire o print e **apague a cópia**.

**Aviso de verificação:** a reforma de ago/2026 (equipe, curtas, cores) foi feita antes de
alguém descobrir o comando acima — assets, contrastes e enquadramentos foram conferidos por
medição e composição em imagem, mas **aquele layout nunca foi visto renderizado**. O botão
do itch.io e o player já foram vistos em PT, EN e ES. O que continua sem passe visual são os
**cards da equipe**, reconstruídos do zero: o texto sobre o ovo é posicionado em absoluto e
não tem rede de segurança se algum cargo crescer ou for traduzido para algo mais longo.
