import { useNavigate } from 'react-router-dom';
import * as S from './recipeBox.style';

export function RecipeBox({ width, height, foodImage, profileImage, nickname, foodName, difficulty }) {
  const navigate = useNavigate();

  const handleRecipeBoxClick = () => {
    navigate(`/recipe`);
  };

  const starImage = `/assets/star${difficulty}.png`;

  return (
    <S.RecipeContainer onClick={handleRecipeBoxClick}>
      <S.FoodImageContainer width={width} height={height} src={foodImage} />
      <S.ProfileContainer>
        <S.ProfileImage src={profileImage} />
        <S.Nickname>{nickname}</S.Nickname>
      </S.ProfileContainer>
      <S.FoodName>{foodName}</S.FoodName>
      <S.DifficultyContainer>
        <S.Difficulty>난이도</S.Difficulty>
        <S.StarImage src={starImage} />
      </S.DifficultyContainer>
    </S.RecipeContainer>
  );
}
