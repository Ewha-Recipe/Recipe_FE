import * as S from './all.style';
import { RecipeBox } from '../recipeBox';
import { recipes } from '../home.const';

export function All() {
  return (
    <div>
      <S.Title>전체 레시피</S.Title>
      <S.AllRecipeBoxContainer>
        {recipes.map(({ profileImage, nickname, foodImage, foodName, difficulty }) => (
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
        ))}
      </S.AllRecipeBoxContainer>
    </div>
  );
}
