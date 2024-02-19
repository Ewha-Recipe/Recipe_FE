import * as S from './random.style';
import { RecipeBox } from '../recipeBox';
import { recipes } from '../home.const';

export function Random() {
  return (
    <div>
      <S.Title>오늘의 추천</S.Title>
      <S.RandomRecipeBoxContainer>
        {recipes.map(({ profileImage, nickname, foodImage, foodName, difficulty }) => (
          <RecipeBox
            key={nickname}
            profileImage={profileImage}
            nickname={nickname}
            foodImage={foodImage}
            foodName={foodName}
            difficulty={difficulty}
            width="380px"
            height="380px"
          />
        ))}
      </S.RandomRecipeBoxContainer>
    </div>
  );
}
