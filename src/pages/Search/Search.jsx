import { useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";

import {
  SearchContainer,
  SearchTitle,
  SearchForm,
  SearchInput,
  SearchButton,
} from './Search.style';

import { searchMovies } from "../../services/tmdb";

function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  async function handleSearch() {
    if (!query.trim()) return;

    try {
      setLoading(true);
      setSearched(true);
      setPage(1);

      const data = await searchMovies(query, 1);

      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }

  async function handlePageChange(newPage) {
    try {
      setLoading(true);

      const data = await searchMovies(query, newPage);

      setMovies(data.results);
      setPage(newPage);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Erro ao mudar de página:", error);
    } finally {
      setLoading(false);
    }
  }

 
return (
  <SearchContainer>
    <div className="container">
      <SearchTitle>Buscar filmes</SearchTitle>

      <SearchForm>
        <SearchInput
          type="text"
          placeholder="Digite o nome de um filme..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSearch();
            }
          }}
        />

        <SearchButton
          type="button"
          onClick={handleSearch}
        >
          Buscar
        </SearchButton>
      </SearchForm>

      {loading && (
        <p className="text-white">Buscando filmes...</p>
      )}

      {!loading && searched && movies.length > 0 && (
        <div className="row g-4">
          {movies.map((movie) => (
            <div className="col-6 col-md-4 col-lg-3" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}

      {!loading && searched && movies.length === 0 && (
        <p className="text-white">
          Nenhum filme encontrado. Tente outra pesquisa.
        </p>
      )}

      {!loading && searched && movies.length > 0 && totalPages > 1 && (
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
  </SearchContainer>
);

}

export default Search;
