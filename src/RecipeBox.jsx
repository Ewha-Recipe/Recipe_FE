import React from "react";
import styled from "styled-components";

const RecipeContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ProfileContainer = styled.div`
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

const FoodImageContainer = styled.img`
  //width: 400px;
  //height: 400px;
  border-radius: 10px;
  margin-right: 30px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border-radius: 20px;
  background-color: rgb(0, 0, 0);
`;

const Nickname = styled.p`
  margin: 10px;
  font-size: 20px;
`;

const Foodname = styled.p`
  font-size: 24px;
  margin-bottom: 0px;
`;

const DifficultyContainer = styled.div`
  display: flex;
  flow-direction: row;
  align-items: center;
`;

const Difficulty = styled.p`
  font-size: 20px;
  margin-right: 10px;
`;

const StarImage = styled.img`
  height: 30px;
`;

function RecipeBox(props) {
  return (
    <RecipeContainer>
      <FoodImageContainer
        width={props.width}
        height={props.height}
        src={props.foodImage}
      />
      <ProfileContainer>
        <ProfileImage src={props.profileImage} />
        <Nickname>{props.nickname}</Nickname>
      </ProfileContainer>
      <Foodname>{props.foodName}</Foodname>
      <DifficultyContainer>
        <Difficulty>난이도</Difficulty>
        <StarImage src={props.difficulty} />
      </DifficultyContainer>
    </RecipeContainer>
  );
}

export default RecipeBox;
