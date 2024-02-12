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
  //width: 400px;
  //height: 400px;
  border-radius: 10px;
  margin-right: 30px;
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

export const FoodName = styled.p`
  font-size: 24px;
  margin-bottom: 0px;
`;

export const DifficultyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Difficulty = styled.p`
  font-size: 20px;
  margin-right: 10px;
`;

export const StarImage = styled.img`
  height: 30px;
`;
