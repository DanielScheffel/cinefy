import styled from "styled-components";
import { colors, fonts } from "../../styles/Variables";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 18px 0;
  background-color: ${colors.surface};
  border-bottom: 1px solid ${colors.border};

  @media (max-width: 768px) {
    padding: 16px 0;
  }

  > .container > div {
    gap: 24px;

    @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 18px;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    order: 1;
    width: 100%;
  }
`;

export const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  color: ${colors.primary};
`;

export const Logo = styled.span`
  font-family: ${fonts.heading};
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: ${colors.text};
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 992px) {
    gap: 20px;
  }

@media (max-width: 768px) {
  order: 3;
  width: 100%;
  gap: 22px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 4px 0 8px;
  white-space: nowrap;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  color: ${colors.textMuted};
  font-size: 0.95rem;
  font-weight: 500;
  white-space: nowrap;
  transition: 0.3s;

  &:hover {
    color: ${colors.primary};
  }
`;