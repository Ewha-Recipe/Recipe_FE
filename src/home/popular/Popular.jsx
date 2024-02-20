import { recipes } from '../home.const';
import { RecipeBox } from '../recipeBox';
import * as S from './popular.style';

export function Popular() {
  return (
    <div>
      <S.Title>인기 레시피</S.Title>
      <S.RecipeBoxContainer>
        {recipes.map(props => (
          <RecipeBox key={props.id} {...props} width="380px" height="380px" />
        ))}
      </S.RecipeBoxContainer>
    </div>
  );
}
