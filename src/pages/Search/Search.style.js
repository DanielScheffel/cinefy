
import styled from 'styled-components';
import { colors, fonts } from '../../styles/Variables';

export const SearchContainer = styled.main`
  width: 100%;
  min-height: 80vh;
  padding: 50px 0;
`;

export const SearchTitle = styled.h1`
  color: ${colors.text};
  font-family: ${fonts.heading};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const SearchForm = styled.div`
  display: flex;
  width: 100%;
  max-width: 650px;
  gap: 10px;
  margin-bottom: 45px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  min-width: 0;
  padding: 13px 16px;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  background: ${colors.surface};
  color: ${colors.text};
  font-family: ${fonts.body};
  outline: none;

  &::placeholder {
    color: ${colors.textMuted};
  }

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px ${colors.primary}30;
  }
`;

export const SearchButton = styled.button`
  padding: 13px 25px;
  border: none;
  border-radius: 8px;
  background: ${colors.primary};
  color: ${colors.text};
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    filter: brightness(1.15);
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;
