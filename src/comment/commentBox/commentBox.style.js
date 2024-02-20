import styled from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1690px;
  margin: 0 85px;
  margin-bottom: 25px;
  border-radius: 10px;
  background-color: #eeeeee;
  box-shadow: 4px 4px 15px rgba(176, 176, 176, 0.2);
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileContainer = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: rgb(0, 0, 0);
`;

export const Nickname = styled.p`
  margin-left: 10px;
  font-size: 20px;
`;

export const Date = styled.p`
  margin: 0 20px;
  font-size: 20px;
`;

export const Content = styled.p`
  margin: 0 15px;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
`;
