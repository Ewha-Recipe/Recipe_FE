import * as S from './recipeBox.style';

// TODO: props 디스트럭쳐링 하기
export function RecipeBox(props) {
  return (
    <S.RecipeContainer>
      <S.FoodImageContainer width={props.width} height={props.height} src={props.foodImage} />
      <S.ProfileContainer>
        <S.ProfileImage src={props.profileImage} />
        <S.Nickname>{props.nickname}</S.Nickname>
      </S.ProfileContainer>
      <S.FoodName>{props.foodName}</S.FoodName>
      <S.DifficultyContainer>
        <S.Difficulty>난이도</S.Difficulty>
        <S.StarImage src={props.difficulty} />
      </S.DifficultyContainer>
    </S.RecipeContainer>
  );
}
