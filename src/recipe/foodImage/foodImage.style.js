import styled from 'styled-components';

export const Image = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const ProfileContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border-radius: 20px;
  background-color: rgb(0, 0, 0);
`;

export const Nickname = styled.p`
  margin: 10px;
  font-size: 20px;
`;
