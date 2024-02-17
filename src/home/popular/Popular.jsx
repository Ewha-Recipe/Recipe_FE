import * as S from './popular.style';
import { RecipeBox } from '../recipeBox';
import { recipes } from '../home.const';

export function Popular() {
  return (
    <div>
      <S.Title>인기 레시피</S.Title>
      <S.RecipeBoxContainer>
        {recipes.map(({ profileImage, nickname, foodImage, foodName, difficulty }) => (
          <RecipeBox
            key={nickname}
            profileImage={profileImage}
            nickname={nickname}
            foodImage={foodImage}
            foodName={foodName}
            difficulty={difficulty}
            width="400px"
            height="400px"
          />
        ))}
      </S.RecipeBoxContainer>
    </div>
  );
}
