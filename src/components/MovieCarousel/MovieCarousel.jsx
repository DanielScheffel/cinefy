
import { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';

import {
  Section,
  SectionTitle,
  CarouselContainer,
  CarouselTrack,
  MovieItem,
} from './MovieCarousel.style';

function MovieCarousel({ title, movies, id }) {
  const [itemsPerSlide, setItemsPerSlide] = useState(
    window.innerWidth <= 991 ? 2 : 5
  );

  useEffect(() => {
    function handleResize() {
      setItemsPerSlide(window.innerWidth <= 991 ? 2 : 5);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!movies || movies.length === 0) {
    return null;
  }

  const slides = [];

  for (let i = 0; i < movies.length; i += itemsPerSlide) {
    slides.push(movies.slice(i, i + itemsPerSlide));
  }

  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>

      <CarouselContainer>
        <CarouselTrack
          id={id}
          className="carousel slide"
          data-bs-interval="false"
        >
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <div className="row g-3">
                  {slide.map((movie) => (
                    <MovieItem key={movie.id}>
                      <MovieCard movie={movie} />
                    </MovieItem>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {slides.length > 1 && (
            <>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#${id}`}
                data-bs-slide="prev"
                aria-label="Filmes anteriores"
              >
                <span className="carousel-control-prev-icon" />
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#${id}`}
                data-bs-slide="next"
                aria-label="Próximos filmes"
              >
                <span className="carousel-control-next-icon" />
              </button>
            </>
          )}
        </CarouselTrack>
      </CarouselContainer>
    </Section>
  );
}

export default MovieCarousel;
