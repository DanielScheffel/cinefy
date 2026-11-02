import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTrendingMovies, getImageUrl } from "../../services/tmdb";

import {
  Section,
  SectionTitle,
  CarouselContainer,
  Slide,
  MovieContent,
  Poster,
  MovieInfo,
  MovieTitle,
  MovieRating,
  MovieDate,
  MovieOverview,
} from "./TrendingCarousel.styles";

function TrendingCarousel() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        setLoading(true);
        setError("");

        const data = await getTrendingMovies();
        setMovies(data.results.slice(0, 10));
      } catch (err) {
        console.error(err);
        setError("Não foi possível carregar os filmes em alta.");
      } finally {
        setLoading(false);
      }
    }

    fetchTrendingMovies();
  }, []);

  if (loading) {
    return <p className="text-center py-5">Carregando filmes em alta...</p>;
  }

  if (error) {
    return <p className="text-center py-5">{error}</p>;
  }

  if (!movies.length) {
    return <p className="text-center py-5">Nenhum filme encontrado.</p>;
  }

  return (
    <Section>
      <SectionTitle>Em alta na semana</SectionTitle>

      <CarouselContainer
        id="trendingCarousel"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-inner">
          {movies.map((movie, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={movie.id}
            >
              <Link
                to={`/filme/${movie.id}`}
                style={{
                  display: "block",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Slide $background={getImageUrl(movie.backdrop_path, "original")}>
                <MovieContent>
                  {movie.poster_path && (
                    <Poster
                      src={getImageUrl(movie.poster_path, "w500")}
                      alt={`Pôster de ${movie.title}`}
                    />
                  )}

                  <MovieInfo>
                    <MovieTitle>{movie.title}</MovieTitle>

                    <MovieRating>
                      ⭐ {movie.vote_average?.toFixed(1)} / 10
                    </MovieRating>

                    <MovieDate>
                      Lançamento: {movie.release_date || "Não informado"}
                    </MovieDate>

                    <MovieOverview>
                      {movie.overview || "Sinopse não disponível."}
                    </MovieOverview>
                  </MovieInfo>
                </MovieContent>
              </Slide>
              </Link>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#trendingCarousel"
          data-bs-slide="prev"
          aria-label="Filme anterior"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#trendingCarousel"
          data-bs-slide="next"
          aria-label="Próximo filme"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
        </button>
      </CarouselContainer>
    </Section>
  );
}

export default TrendingCarousel;
