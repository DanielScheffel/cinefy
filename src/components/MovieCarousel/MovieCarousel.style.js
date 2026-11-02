
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
    font-size: 1.35rem;
    margin-bottom: 15px;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  padding: 0 40px;

  @media (max-width: 576px) {
    padding: 0 28px;
  }
`;

export const CarouselTrack = styled.div`
  position: relative;

  .carousel-inner {
    overflow: hidden;
    border-radius: 12px;
  }

  .carousel-item {
    transition: transform 0.6s ease-in-out;
  }

  .carousel-control-prev,
  .carousel-control-next {
    position: absolute;
    top: 50%;
    bottom: auto;
    transform: translateY(-50%);
    width: 35px;
    height: 45px;
    opacity: 1;
    border-radius: 8px;
    background-color: ${colors.surface};
    z-index: 5;
  }

  .carousel-control-prev {
    left: -40px;
  }

  .carousel-control-next {
    right: -40px;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 576px) {
    .carousel-control-prev,
    .carousel-control-next {
      width: 27px;
      height: 38px;
    }

    .carousel-control-prev {
      left: -28px;
    }

    .carousel-control-next {
      right: -28px;
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      width: 14px;
      height: 14px;
    }
  }
`;

export const MovieItem = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  display: flex;

  > article {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 991px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;
