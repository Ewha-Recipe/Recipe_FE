import { useNavigate } from 'react-router-dom';
import * as S from './navbar.style';

export function Navbar() {
  const navigate = useNavigate();
  const handlePost = () => {
    navigate('/recipePost');
  };
  const goHome = () => {
    navigate('/');
  };

  return (
    <>
      <S.GlobalStyle />
      <S.NavbarContainer>
        <S.HomeButton onClick={goHome}>
          <S.LogoImage src="/assets/ewharecipeLogo.png" alt="Ewha Recipe Logo" />
        </S.HomeButton>

        <S.ButtonContainer>
          <S.Button onClick={handlePost}>레시피 등록</S.Button>
        </S.ButtonContainer>
      </S.NavbarContainer>
    </>
  );
}
