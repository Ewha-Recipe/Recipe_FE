import { PostInfo, Detail } from './';
import { Navbar } from '../navbar';
import * as S from './recipe.style';

export function Recipe() {
  return (
    <>
      <Navbar />
      <S.ScreenContainer>
        <S.TitleBox>
          <S.Title>음식 제목</S.Title>
        </S.TitleBox>
        <S.RecipeContainer>
          <PostInfo />
          <Detail />
        </S.RecipeContainer>
      </S.ScreenContainer>
    </>
  );
}
