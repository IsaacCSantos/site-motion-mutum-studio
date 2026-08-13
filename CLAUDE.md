# Motion Mutum Estúdio — Brief do projeto

Estúdio indie de jogos e curtas de animação, em **Coruripe, interior de Alagoas**.
Iniciativa privada com apoio da **Prefeitura de Coruripe / Secretaria Municipal de Cultura**
(cede espaço; contrapartida = palestras, workshops e o Cineclube da Biblioteca Municipal).
Missão: propagar arte e cultura pelo audiovisual e games, formando profissionais locais.

Nome = referência ao **mutum-de-alagoas**, ave-símbolo do estado. Cores = bandeira de Alagoas
(vermelho / branco / azul) + dourado + preto quente.

## Sistema visual (já aplicado na landing)
- Cores: vermelho #E23A2E, azul #2A3BC4, dourado #F4B12A, preto quente #1A1512, creme #F6EDD9, pedra #C7BFB0.
- Fontes: Press Start 2P (arcade/acentos), Fredoka (títulos), Nunito Sans (corpo).
- Componentes pixel: bordas 3px ink, sombras duras offset, sem raio.
- Logo (versão reformulada, ago/2026): assets/mutum-logo.png (lockup). O ícone da ave
  (assets/mutum-bird.png, usado no header e no favicon) segue sendo o da versão anterior,
  por preferência da equipe — não regerar a partir do lockup novo. A cauda do lockup tem
  agora as três penas da bandeira —
  vermelho #E00109, branco, azul #0095D4 — e esse azul do logo é mais claro que o --blue
  (#2A3BC4) usado nos componentes do site; é proposital, não "corrigir" um pelo outro.
  Preto+branco só leem bem sobre placa cor-de-pedra (#C7BFB0), não em fundo escuro/claro puro.
- Placeholder oficial: assets/em-desenvolvimento.png (mutum de capacete com a placa
  "estamos em reforma"), recolorido para a paleta da marca — o fundo dele é exatamente
  #C7BFB0, igual ao do bloco `.wip`, então se funde sem emenda. Ver README para o markup.
- Site é trilíngue PT/EN/ES (atributos data-en / data-es + botão no menu).

## Equipe (4 fundadores)
- **Cássio Januário** — Bacharel Análise de Sistemas; arte/ilustração (pintura, gravura, digital); curta stop-motion "Tupi Or Not Tupi" (Anima Cine Sesi 2016).
- **Erivelto Souza** — Licenciado em Ciências Biológicas (herpetologia, ornitologia, paleontologia); roteirista e poeta; ilustração científica/didática, quadrinhos, animação 2D, stop motion, escultura (Museu de História UFAL, Museu da Mata Atlântica).
- **Isaac C. Santos** — Bacharel Análise e Desenvolvimento de Sistemas; programação, engenharia de software, dev de jogos, modelagem 3D, web design.
- **Thiago O. Rodrigues** — Estudante de Licenciatura em História; programação, arte e modelagem 3D; também no "Tupi Or Not Tupi" (2016).

## Jogo EVOLUA! (corrigir na landing — descrição atual está genérica)
- **Gênero: Running / Plataforma.** **Plataformas: PC / Mobile.**
- Ambientado no **Cretáceo**, era dos dinossauros, perto da Grande Extinção.
- Protagonista: uma **ave ancestral de todas as aves atuais**, com habilidade metamórfica —
  assume a forma de outras aves conforme a **semente** que come.
- Aliado: um **pequeno mamífero pré-histórico** que também se transforma em outros mamíferos.
- Objetivo: sobreviver a animais e obstáculos em vários **biomas** e **voltar ao ninho**.
- Tema: **evolução por seleção natural**, visão lúdica e educativa; personagens inspirados em
  espécies brasileiras (pré-históricas e atuais). Refs de infância do criador: Bomberman, Sonic,
  Mario; atuais: Gris, Attack the Light.

## Pendências
1. Página **Design System** (paleta, tipografia, catálogo de componentes pixel).
2. Arte final para os espaços que ainda mostram a placa "em desenvolvimento":
   showreel, os 3 curtas e 2 das 3 miniaturas de screenshot do EVOLUA!.
3. URLs reais de Discord (ainda `href="#"` em index.html).

Já feitos: seção EVOLUA! com gênero/plataformas/sinopse corretos, seção Equipe (4 fundadores),
menção ao apoio da Prefeitura/Cineclube no "Estúdio", logo reformulado e key art do EVOLUA!
(bioma deserto — assets/evolua-deserto.jpg e o recorte assets/evolua-deserto-detalhe.jpg).
