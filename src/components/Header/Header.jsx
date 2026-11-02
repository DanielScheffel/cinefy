import { FaFilm, FaHeart, } from "react-icons/fa";
import { HeaderContainer, HeaderNav, Logo, LogoContainer, LogoIcon, NavLink} from "./Header.style";
import { Link } from "react-router-dom";


function Header() {
    return (
        <HeaderContainer>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">

                    <LogoContainer>
                        <LogoIcon>
                            <FaFilm />
                        </LogoIcon>

                        <Logo>CINEFY</Logo>
                    </LogoContainer>

                    <HeaderNav>
                        <NavLink as={Link} to="/">
                            Início
                        </NavLink>

                        <NavLink as={Link} to="/categorias">
                            Categorias
                        </NavLink>

                        <NavLink as={Link} to="/favoritos">
                            <FaHeart />
                            Favoritos
                        </NavLink>

                        <NavLink as={Link} to="/buscar">
                            Pesquisar
                        </NavLink>
                    </HeaderNav>
                </div>
            </div>
        </HeaderContainer>
    )
}

export default Header