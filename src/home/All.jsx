import styled from "styled-components";
import { RecipeBox } from "./recipeBox";
import { recipes } from "./home.const";

const AllRecipeBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 100px;
  justify-content: space-around;
`;

const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-top: 80px;
`;

export function All() {
  return (
    <div>
      <Title>전체 레시피</Title>
      <AllRecipeBoxContainer>
        {recipes.map(
          ({ profileImage, nickname, foodImage, foodName, difficulty }) => (
            <RecipeBox
              key={nickname}
              profileImage={profileImage}
              nickname={nickname}
              foodImage={foodImage}
              foodName={foodName}
              difficulty={difficulty}
              width="315px"
              height="315px"
            />
          ),
        )}
      </AllRecipeBoxContainer>
    </div>
  );
}
