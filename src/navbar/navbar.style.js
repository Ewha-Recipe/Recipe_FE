import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow-x: hidden;
  }
`;

export const NavbarContainer = styled.div`
  height: 150px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(61, 109, 48);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.4);
`;

export const LogoImage = styled.img`
  height: 80px;
  border-radius: 10px;
  margin-left: 30px;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
  margin-right: 30px;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 18px;
  color: white;
  cursor: pointer;
  &:hover {
    color: #ccc;
  }
`;

export const HomeButton = styled.button`
  border: none;
  background-color: transparent;
`;
