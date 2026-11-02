
import styled from 'styled-components';
import { colors, fonts } from '../../styles/Variables';

export const CategoriesContainer = styled.main`
  width: 100%;
  min-height: 80vh;
  padding: 50px 0;

  @media (max-width: 768px) {
    padding: 35px 0;
  }

  @media (max-width: 480px) {
    padding: 25px 0;
  }
`;

export const CategoriesTitle = styled.h1`
  color: ${colors.text};
  font-family: ${fonts.heading};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 22px;
  }
`;

export const GenresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 45px;

  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const GenreButton = styled.button`
  padding: 10px 20px;
  border: 1px solid ${({ $selected }) =>
    $selected ? colors.primary : colors.border};
  border-radius: 8px;
  background: ${({ $selected }) =>
    $selected ? colors.primary : colors.surface};
  color: ${colors.text};
  font-family: ${fonts.body};
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${colors.primary};
    border-color: ${colors.primary};
  }

  @media (max-width: 480px) {
    padding: 9px 13px;
    font-size: 0.85rem;
  }
`;
