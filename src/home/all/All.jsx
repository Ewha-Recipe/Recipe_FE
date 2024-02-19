import * as S from './all.style';
import { RecipeBox } from '../recipeBox';
import { recipes } from '../home.const';
import { useNavigate } from 'react-router-dom';

//TODO: handleRecipeBoxClick함수 -> navigate
export function All() {
  const navigate = useNavigate();
  const handleMore = () => {
    navigate('/all');
  };

  {
    /* 
  const handleRecipeBoxClick = nickname => {
    navigate(`/recipe/${nickname}`);
  };
  

  const handleRecipeBoxClick = nickname => {
    if (nickname === recipes[3].nickname) {
      navigate('/recipe');
    }
  };
  */
  }

  return (
    <div>
      <S.TitleContainer>
        <S.Title>전체 레시피</S.Title>
        <S.Button onClick={handleMore}>더보기</S.Button>
      </S.TitleContainer>
      <S.AllRecipeBoxContainer>
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
            //onClick={() => handleRecipeBoxClick(nickname)}
          />
        ))}
      </S.AllRecipeBoxContainer>
    </div>
  );
}
