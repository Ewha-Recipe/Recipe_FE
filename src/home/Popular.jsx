import styled from 'styled-components';
import { RecipeBox } from './recipeBox';
import { recipes } from './home.const';

const RecipeBoxContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  margin-left: 100px;
  //justify-content: space-around;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-top: 80px;
  margin-left: 100px;
`;

export function Popular() {
  return (
    <div>
      <Title>인기 레시피</Title>
      <RecipeBoxContainer>
        {recipes.map((recipe, index) => (
          <RecipeBox
            key={index}
            profileImage={recipe.profileImage}
            nickname={recipe.nickname}
            foodImage={recipe.foodImage}
            foodName={recipe.foodName}
            difficulty={recipe.difficulty}
            width="400px"
            height="400px"
          />
        ))}
      </RecipeBoxContainer>
    </div>
  );
}
