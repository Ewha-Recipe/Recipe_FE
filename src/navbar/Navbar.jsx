import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavbarContainer = styled.div`
  height: 150px;
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
  align-items: center;
`;

const LogoImage = styled.img`
  height: 80px;
  margin: 30px;
  border-radius: 10px;
`;

const ButtonContainer = styled.div`
  margin-right: 30px;
  position: absolute;
  right: 0;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 18px;
  margin-left: 30px;
`;

export function Navbar() {
  const navigate = useNavigate();

  const handlePost = () => {
    navigate('/foods');
  };

  return (
    <NavbarContainer>
      <LogoImage src="./assets/ewharecipeLogo.png" alt="Ewha Recipe Logo" />
      <ButtonContainer>
        <Button onClick={handlePost}>레시피 등록</Button>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </ButtonContainer>
    </NavbarContainer>
  );
}
