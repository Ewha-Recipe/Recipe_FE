import { navigate } from 'react-router-dom';
import { recipes } from '../home.const';
import { RecipeBox } from '../recipeBox';
import * as S from './popular.style';

export function Popular() {
  const handleRecipeBoxClick = nickname => {
    navigate(`/recipe/${nickname}`);
  };

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
            width="380px"
            height="380px"
          />
        ))}
      </S.RecipeBoxContainer>
    </div>
  );
}
