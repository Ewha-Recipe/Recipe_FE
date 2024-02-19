import * as S from './allMore.style';
import { RecipeBox } from '../home/recipeBox';
import { Navbar } from '../navbar';
import { recipes } from './more.const';

//TODO: handleRecipeBoxClick함수 -> navigate
export function AllMore() {
  return (
    <div>
      <Navbar />
      <S.AllRecipeContainer>
        <S.Title>전체 레시피</S.Title>
        <S.RecipeBoxContainer>
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
        </S.RecipeBoxContainer>
      </S.AllRecipeContainer>
    </div>
  );
}
