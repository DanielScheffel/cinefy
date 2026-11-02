
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN_API}`,
  },
});

// FILMES

// Filmes em alta na semana
export async function getTrendingMovies(page = 1) {
  const response = await api.get('/trending/movie/week', {
    params: {
      language: 'pt-BR',
      page,
    },
  });

  return response.data;
}

// Filmes populares
export async function getPopularMovies(page = 1) {
  const response = await api.get('/movie/popular', {
    params: {
      language: 'pt-BR',
      page,
    },
  });

  return response.data;
}

// Filmes mais bem avaliados
export async function getTopRatedMovies(page = 1) {
  const response = await api.get('/movie/top_rated', {
    params: {
      language: 'pt-BR',
      page,
    },
  });

  return response.data;
}

// Próximos lançamentos
export async function getUpcomingMovies(page = 1) {
  const response = await api.get('/movie/upcoming', {
    params: {
      language: 'pt-BR',
      page,
      region: 'BR',
    },
  });

  return response.data;
}

// DETALHES DOS FILMES

// Detalhes completos de um filme
export async function getMovieDetails(id) {
  const response = await api.get(`/movie/${id}`, {
    params: {
      language: 'pt-BR',
    },
  });

  return response.data;
}

// Filmes semelhantes
export async function getSimilarMovies(id, page = 1) {
  const response = await api.get(`/movie/${id}/similar`, {
    params: {
      language: 'pt-BR',
      page,
    },
  });

  return response.data;
}

// Filmes recomendados
export async function getRecommendedMovies(id, page = 1) {
  const response = await api.get(`/movie/${id}/recommendations`, {
    params: {
      language: 'pt-BR',
      page,
    },
  });

  return response.data;
}

// Onde assistir no Brasil
export async function getMovieWatchProviders(id) {
  const response = await api.get(`/movie/${id}/watch/providers`);

  return response.data.results?.BR || null;
}

// CATEGORIAS

// Lista de gêneros
export async function getMovieGenres() {
  const response = await api.get('/genre/movie/list', {
    params: {
      language: 'pt-BR',
    },
  });

  return response.data.genres;
}

// PESQUISA

export async function searchMovies(query, page = 1) {
  const response = await api.get('/search/movie', {
    params: {
      query,
      language: 'pt-BR',
      page,
    },
  });

  return response.data;
}


export async function getMoviesByGenre(genreId, page = 1) {
  const response = await api.get('/discover/movie', {
    params: {
      with_genres: genreId,
      page,
      sort_by: 'popularity.desc',
      language: 'pt-BR',
    },
  });

  return response.data;
}


// IMAGENS

export function getImageUrl(path, size = 'w500') {
  if (!path) return null;

  return `https://image.tmdb.org/t/p/${size}${path}`;
}
