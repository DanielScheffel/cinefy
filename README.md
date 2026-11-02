
# 🎬 CINEFY

O CINEFY é uma aplicação web desenvolvida em React que permite explorar o universo dos filmes. Com uma interface moderna e responsiva, os usuários podem descobrir lançamentos, consultar informações, pesquisar títulos e organizar seus filmes favoritos.

## ✨ Funcionalidades

- 🎥 **Filmes em alta:** confira os filmes que estão em destaque na semana.
- 🔥 **Filmes populares:** descubra os títulos mais populares.
- ⭐ **Mais bem avaliados:** explore filmes com as melhores avaliações.
- 🎞️ **Próximos lançamentos:** fique por dentro das novidades.
- 🔎 **Pesquisa:** encontre filmes pelo nome.
- 📂 **Categorias:** explore filmes por gênero.
- ❤️ **Favoritos:** salve seus filmes preferidos.
- 📖 **Detalhes:** consulte sinopse, avaliação, duração, gêneros e outras informações.
- 📺 **Onde assistir:** consulte os serviços de streaming disponíveis no Brasil.
- 📱 **Design responsivo:** interface adaptada para computadores e dispositivos móveis.



## 🛠️ Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **React:** construção da interface por meio de componentes.
- **JavaScript:** implementação da lógica e funcionalidades.
- **Vite:** ferramenta de desenvolvimento e build.
- **Styled Components:** estilização dos componentes.
- **Bootstrap:** recursos de layout e responsividade.
- **React Router DOM:** gerenciamento de rotas e navegação.
- **React Icons:** biblioteca de ícones.
- **Axios:** realização de requisições HTTP.
- **TMDB API:** fornecimento de dados e imagens dos filmes.



## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/)
- npm (instalado junto com o Node.js)

### 1. Clone o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
```

### 2. Entre na pasta do projeto

```bash
cd cinefy
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure a API do TMDB

Crie um arquivo `.env` na raiz do projeto e adicione:

```env
VITE_TOKEN_API=seu_token_de_acesso_tmdb
```

Substitua `seu_token_de_acesso_tmdb` pelo seu próprio Read Access Token da API do TMDB.

### 5. Execute a aplicação

```bash
npm run dev
```

O Vite disponibilizará um endereço local para acessar o CINEFY pelo navegador.


## 📡 API utilizada

Este projeto utiliza a API do [The Movie Database (TMDB)](https://www.themoviedb.org/) para obter informações, avaliações, sinopses e imagens dos filmes.

Os dados são fornecidos pela plataforma TMDB.

## 👨‍💻 Desenvolvedor

Projeto desenvolvido como parte de um projeto pessoal de estudos e desenvolvimento web, com o objetivo de aplicar conhecimentos em React, consumo de APIs e desenvolvimento de interfaces responsivas.