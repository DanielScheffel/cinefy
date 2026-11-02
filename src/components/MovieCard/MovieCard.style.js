
import styled from 'styled-components';
import { colors, fonts } from '../../styles/Variables';

export const CardContainer = styled.article`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  background-color: ${colors.surface};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
  }
`;

export const PosterContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  background-color: ${colors.background};
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

export const Rating = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px 9px;
  border-radius: 6px;
  background-color: ${colors.primary};
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background-color: rgba(8, 11, 18, 0.8);
  color: ${({ $favorite }) =>
    $favorite ? colors.danger : '#FFFFFF'};

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${colors.danger};
    color: #FFFFFF;
  }
`;

export const MovieInfo = styled.div`
  padding: 12px;
`;

export const MovieTitle = styled.h3`
  color: ${colors.text};
  font-family: ${fonts.heading};
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.4;
  min-height: 2.8em;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const MovieYear = styled.span`
  color: ${colors.textMuted};
  font-size: 0.8rem;
`;
