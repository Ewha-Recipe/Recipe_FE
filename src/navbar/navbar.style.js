import styled from 'styled-components';

export const NavbarContainer = styled.div`
  height: 150px;
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 80px;
  margin: 30px;
  border-radius: 10px;
`;

export const ButtonContainer = styled.div`
  margin-right: 30px;
  position: absolute;
  right: 0;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 18px;
  margin-left: 30px;
`;
