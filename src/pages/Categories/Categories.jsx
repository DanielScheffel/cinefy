import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { getMovieGenres, getMoviesByGenre } from "../../services/tmdb";

import {
  CategoriesContainer,
  CategoriesTitle,
  GenresContainer,
  GenreButton,
} from './Categories.style';

function Categories() {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [movies, setMovies] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  async function handleGenreChange(genreId) {
    try {
      setLoading(true);
      setSelectedGenre(genreId);
      setPage(1);

      const data = await getMoviesByGenre(genreId, 1);

      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Erro ao buscar filmes por categoria:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function fetchGenres() {
      try {
        const data = await getMovieGenres();
        setGenres(data);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    }

    fetchGenres();
  }, []);

  
async function handlePageChange(newPage) {
  try {
    setLoading(true);

    const data = await getMoviesByGenre(selectedGenre, newPage);

    setMovies(data.results);
    setPage(newPage);
    setTotalPages(data.total_pages);
  } catch (error) {
    console.error('Erro ao mudar de página:', error);
  } finally {
    setLoading(false);
  }
}


  
return (
  <CategoriesContainer>
    <div className="container">
      <CategoriesTitle>Categorias</CategoriesTitle>

      <GenresContainer>
        {genres.map((genre) => (
          <GenreButton
            key={genre.id}
            $selected={selectedGenre === genre.id}
            onClick={() => handleGenreChange(genre.id)}
          >
            {genre.name}
          </GenreButton>
        ))}
      </GenresContainer>

      {loading && (
        <p className="text-white mt-4">
          Carregando filmes...
        </p>
      )}

      {!loading && movies.length > 0 && (
        <div className="row g-4">
          {movies.map((movie) => (
            <div className="col-6 col-md-4 col-lg-3" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}

      {!loading && movies.length > 0 && totalPages > 1 && (
        <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
          <button
            className="btn btn-outline-light"
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
          >
            Anterior
          </button>

          <span className="text-white">
            Página {page} de {totalPages}
          </span>

          <button
            className="btn btn-outline-light"
            disabled={page === totalPages}
            onClick={() => handlePageChange(page + 1)}
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  </CategoriesContainer>
);

}

export default Categories;
