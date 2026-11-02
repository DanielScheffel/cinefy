
import { FaFilm } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  FooterContainer,
  FooterContent,
  FooterLogo,
  FooterDescription,
  FooterNavigation,
  FooterLink,
  FooterBottom,
} from "./Footer.style";

function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <div>
            <FooterLogo>
              <FaFilm />
              <span>CINEFY</span>
            </FooterLogo>

            <FooterDescription>
              Seu próximo filme favorito está aqui.
              Explore, descubra e organize seus filmes preferidos.
            </FooterDescription>
          </div>

          <FooterNavigation>
            <FooterLink as={Link} to="/">
              Início
            </FooterLink>

            <FooterLink as={Link} to="/categorias">
              Categorias
            </FooterLink>

            <FooterLink as={Link} to="/favoritos">
              Favoritos
            </FooterLink>

            <FooterLink as={Link} to="/buscar">
              Pesquisar
            </FooterLink>
          </FooterNavigation>
        </FooterContent>

        <FooterBottom>
          <p>
            Este produto utiliza a API do TMDB, mas não é
            endossado ou certificado pelo TMDB.
          </p>

          <span>© 2026 CINEFY. Todos os direitos reservados.</span>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
}

export default Footer;
