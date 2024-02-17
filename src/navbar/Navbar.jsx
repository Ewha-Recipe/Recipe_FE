import * as S from './navbar.style';

export function Navbar() {
  return (
    <S.NavbarContainer>
      <S.LogoImage src="./assets/ewharecipeLogo.png" alt="Ewha Recipe Logo" />
      <S.ButtonContainer>
        <S.Button>로그인</S.Button>
        <S.Button>회원가입</S.Button>
      </S.ButtonContainer>
    </S.NavbarContainer>
  );
}
