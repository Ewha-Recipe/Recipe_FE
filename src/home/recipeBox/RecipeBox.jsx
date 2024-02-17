import * as S from './recipeBox.style';

export function RecipeBox({ width, height, foodImage, profileImage, nickname, foodName, difficulty }) {
  return (
    <S.RecipeContainer>
      <S.FoodImageContainer width={width} height={height} src={foodImage} />
      <S.ProfileContainer>
        <S.ProfileImage src={profileImage} />
        <S.Nickname>{nickname}</S.Nickname>
      </S.ProfileContainer>
      <S.FoodName>{foodName}</S.FoodName>
      <S.DifficultyContainer>
        <S.Difficulty>난이도</S.Difficulty>
        <S.StarImage src={difficulty} />
      </S.DifficultyContainer>
    </S.RecipeContainer>
  );
}
