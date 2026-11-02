
import styled from 'styled-components';
import { colors, fonts } from '../../styles/Variables';

export const DetailsContainer = styled.main`
  color: ${colors.text};
  min-height: 100vh;
  background-color: ${colors.background};
`;

export const Hero = styled.section`
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  padding: 60px 8%;

  background-image:
    linear-gradient(
      90deg,
      rgba(8, 11, 18, 0.98) 0%,
      rgba(8, 11, 18, 0.85) 50%,
      rgba(8, 11, 18, 0.35) 100%
    ),
    url(${({ $background }) => $background});

  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 40px 20px;
  }
`;

export const MovieContent = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  max-width: 1100px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 25px;
  }
`;

export const Poster = styled.img`
  width: 280px;
  border-radius: 14px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    width: 190px;
  }
`;

export const MovieInfo = styled.div`
  max-width: 700px;
`;

export const MovieTitle = styled.h1`
  font-family: ${fonts.heading};
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const MovieMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-bottom: 25px;
  color: ${colors.textMuted};

  @media (max-width: 768px) {
    justify-content: center;
    gap: 12px;
  }
`;

export const Rating = styled.span`
  color: #ffc107;
  font-weight: 700;
`;

export const OverviewTitle = styled.h2`
  font-family: ${fonts.heading};
  font-size: 1.3rem;
  margin-bottom: 12px;
`;

export const Overview = styled.p`
  color: ${colors.textMuted};
  font-size: 1rem;
  line-height: 1.8;
`;


export const ProvidersSection = styled.section`
  padding: 35px 8%;
  color: ${colors.text};

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const ProvidersTitle = styled.h2`
  font-family: ${fonts.heading};
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const ProvidersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
`;

export const ProviderItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 90px;
  text-align: center;
`;

export const ProviderLogo = styled.img`
  width: 65px;
  height: 65px;
  object-fit: cover;
  border-radius: 12px;
`;

export const ProviderName = styled.span`
  color: ${colors.textMuted};
  font-size: 0.8rem;
`;


export const SimilarSection = styled.section`
  padding: 40px 8% 60px;

  @media (max-width: 768px) {
    padding: 30px 20px 45px;
  }
`;

export const SimilarTitle = styled.h2`
  color: ${colors.text};
  font-family: ${fonts.heading};
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 25px;

  @media (max-width: 576px) {
    font-size: 1.4rem;
  }
`;

export const SimilarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 25px 18px;

  @media (max-width: 991px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px 12px;
  }
`;
