
import styled from 'styled-components';
import { colors, fonts } from '../../styles/Variables';

export const Section = styled.section`
  margin-bottom: 50px;

  @media (max-width: 576px) {
    margin-bottom: 35px;
  }
`;

export const SectionTitle = styled.h2`
  color: ${colors.text};
  font-family: ${fonts.heading};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 20px;

  @media (max-width: 576px) {
    font-size: 1.4rem;
    margin-bottom: 15px;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background-color: ${colors.surface};

  .carousel-control-prev,
  .carousel-control-next {
    width: 7%;
    z-index: 3;
  }

  @media (max-width: 576px) {
    border-radius: 12px;

    .carousel-control-prev,
    .carousel-control-next {
      width: 12%;
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      width: 18px;
      height: 18px;
    }
  }
`;

export const Slide = styled.article`
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
  padding: 50px;

  background-image:
    linear-gradient(
      90deg,
      rgba(8, 11, 18, 0.98) 0%,
      rgba(8, 11, 18, 0.85) 45%,
      rgba(8, 11, 18, 0.25) 100%
    ),
    url(${({ $background }) => $background});

  background-size: cover;
  background-position: center;

  @media (max-width: 991px) {
    min-height: 420px;
    padding: 35px;
  }

  @media (max-width: 576px) {
    min-height: 520px;
    padding: 25px 35px;
    align-items: flex-start;

    background-image:
      linear-gradient(
        90deg,
        rgba(8, 11, 18, 0.94),
        rgba(8, 11, 18, 0.82)
      ),
      url(${({ $background }) => $background});

    background-position: center;
  }
`;

export const MovieContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 30px;
  max-width: 750px;

  @media (max-width: 991px) {
    gap: 22px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
    width: 100%;
  }
`;

export const Poster = styled.img`
  width: 200px;
  flex-shrink: 0;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

  @media (max-width: 991px) {
    width: 160px;
  }

  @media (max-width: 576px) {
    width: 125px;
    border-radius: 9px;
  }
`;

export const MovieInfo = styled.div`
  color: ${colors.text};

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const MovieTitle = styled.h3`
  font-family: ${fonts.heading};
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 15px;

  @media (max-width: 991px) {
    font-size: 1.8rem;
  }

  @media (max-width: 576px) {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }
`;

export const MovieRating = styled.p`
  color: #ffc107;
  font-weight: 600;
  margin-bottom: 10px;

  @media (max-width: 576px) {
    font-size: 0.85rem;
    margin-bottom: 6px;
  }
`;

export const MovieDate = styled.p`
  color: ${colors.textMuted};
  margin-bottom: 15px;

  @media (max-width: 576px) {
    font-size: 0.8rem;
    margin-bottom: 8px;
  }
`;

export const MovieOverview = styled.p`
  color: ${colors.text};
  line-height: 1.6;
  font-size: 0.95rem;
  max-width: 500px;

  @media (max-width: 576px) {
    font-size: 0.82rem;
    line-height: 1.45;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
