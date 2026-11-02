import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MovieCard from "../../components/MovieCard/MovieCard";

import {
  DetailsContainer,
  Hero,
  MovieContent,
  Poster,
  MovieInfo,
  MovieTitle,
  MovieMeta,
  Rating,
  OverviewTitle,
  Overview,
  ProvidersSection,
  ProvidersTitle,
  ProvidersList,
  ProviderItem,
  ProviderLogo,
  ProviderName,
  SimilarSection,
  SimilarTitle,
  SimilarGrid,
} from "./Details.style";

import {
  getMovieDetails,
  getImageUrl,
  getMovieWatchProviders,
  getSimilarMovies,
  getRecommendedMovies,
} from "../../services/tmdb";

function Details() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [providers, setProviders] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setLoading(true);
        setError("");

        const data = await getMovieDetails(id);
        setMovie(data);

        const providerData = await getMovieWatchProviders(id);
        setProviders(providerData);

        const similarData = await getSimilarMovies(id);
        setSimilarMovies(similarData.results.slice(0, 5));

        const recommendedData = await getRecommendedMovies(id);
        setRecommendedMovies(recommendedData.results.slice(0, 5));
      } catch (err) {
        console.error(err);
        setError("Não foi possível carregar os detalhes do filme.");
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <p className="text-center py-5">Carregando detalhes...</p>;
  }

  if (error) {
    return <p className="text-center py-5">{error}</p>;
  }

  if (!movie) {
    return <p className="text-center py-5">Filme não encontrado.</p>;
  }

  const backdrop = getImageUrl(movie.backdrop_path, "original");
  const poster = getImageUrl(movie.poster_path, "w500");

  const year = movie.release_date
    ? movie.release_date.slice(0, 4)
    : "Ano desconhecido";

  const runtime = movie.runtime
    ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min`
    : "Duração indisponível";

  return (
    <DetailsContainer>
      <Hero $background={backdrop}>
        <MovieContent>
          {poster && <Poster src={poster} alt={`Pôster de ${movie.title}`} />}

          <MovieInfo>
            <MovieTitle>{movie.title}</MovieTitle>

            <MovieMeta>
              <Rating>⭐ {movie.vote_average?.toFixed(1) || "N/A"}</Rating>

              <span>{year}</span>
              <span>{runtime}</span>
            </MovieMeta>

            <MovieMeta>
              {movie.genres?.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </MovieMeta>

            <OverviewTitle>Sinopse</OverviewTitle>

            <Overview>{movie.overview || "Sinopse não disponível."}</Overview>

            <MovieMeta>
              <span>Status: {movie.status || "Não informado"}</span>

              {movie.original_language && (
                <span>
                  Idioma original: {movie.original_language.toUpperCase()}
                </span>
              )}
            </MovieMeta>
          </MovieInfo>
        </MovieContent>
      </Hero>
      <ProvidersSection>
        <ProvidersTitle>Onde assistir</ProvidersTitle>

        {providers?.flatrate?.length > 0 ? (
          <ProvidersList>
            {providers.flatrate.map((provider) => (
              <ProviderItem key={provider.provider_id}>
                <ProviderLogo
                  src={`https://image.tmdb.org/t/p/w200${provider.logo_path}`}
                  alt={provider.provider_name}
                />

                <ProviderName>{provider.provider_name}</ProviderName>
              </ProviderItem>
            ))}
          </ProvidersList>
        ) : (
          <p>Não encontramos opções de streaming por assinatura no momento.</p>
        )}
      </ProvidersSection>

      {similarMovies.length > 0 && (
        <SimilarSection>
          <SimilarTitle>Filmes semelhantes</SimilarTitle>

          <SimilarGrid>
            {similarMovies.map((similarMovie) => (
              <MovieCard key={similarMovie.id} movie={similarMovie} />
            ))}
          </SimilarGrid>
        </SimilarSection>
      )}

      {recommendedMovies.length > 0 && (
        <SimilarSection>
          <SimilarTitle>Recomendados para você</SimilarTitle>

          <SimilarGrid>
            {recommendedMovies.map((recommendedMovie) => (
              <MovieCard key={recommendedMovie.id} movie={recommendedMovie} />
            ))}
          </SimilarGrid>
        </SimilarSection>
      )}
    </DetailsContainer>
  );
}

export default Details;
