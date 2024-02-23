import { Link } from 'react-router-dom';
import * as S from './navbar.style';

export function Navbar() {
  return (
    <>
      <S.GlobalStyle />
      <S.NavbarContainer>
        <S.HomeButton>
          <Link to="/">
            <S.LogoImage src="/assets/ewharecipeLogo.png" alt="Ewha Recipe Logo" />
          </Link>
        </S.HomeButton>

        <S.ButtonContainer>
          <Link to="/recipePost">
            <S.Button>레시피 등록</S.Button>
          </Link>
        </S.ButtonContainer>
      </S.NavbarContainer>
    </>
  );
}
