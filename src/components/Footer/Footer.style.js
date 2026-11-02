
import styled from "styled-components";
import { colors, fonts } from "../../styles/Variables";

export const FooterContainer = styled.footer`
  width: 100%;
  margin-top: 60px;
  padding: 40px 0 20px;
  background-color: ${colors.surface};
  border-top: 1px solid ${colors.border};
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${colors.primary};
  font-family: ${fonts.heading};
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 2px;
`;

export const FooterDescription = styled.p`
  max-width: 350px;
  margin-top: 12px;
  color: ${colors.textMuted};
  font-family: ${fonts.body};
  font-size: 0.9rem;
  line-height: 1.6;
`;

export const FooterNavigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;

  @media (max-width: 480px) {
    gap: 18px;
  }
`;

export const FooterLink = styled.a`
  color: ${colors.textMuted};
  font-family: ${fonts.body};
  font-size: 0.9rem;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    color: ${colors.primary};
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid ${colors.border};

  p,
  span {
    margin: 0;
    color: ${colors.secondary};
    font-family: ${fonts.body};
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
`;
