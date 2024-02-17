import styled from 'styled-components';

export const RecipeContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const ProfileContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FoodImageContainer = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 10px;
  margin-bottom: 30px;
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

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  width: 235px;
  height: 80px;
  background-color: #eeeeee;
  border: 1px solid #797979;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  font-size: 20px;
`;

export const Icon = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 14px;
`;
