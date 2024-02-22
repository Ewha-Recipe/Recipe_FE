import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RecipeBox } from '../recipeBox';
import * as S from './all.style';

const API_URL = 'http://13.125.245.200:5000';

//TODO: handleRecipeBoxClick함수 -> navigate
export function All() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`${API_URL}/foods`);
        const data = await response.json();
        console.log(response, data);
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes: ', error);
      }
    };
    fetchRecipes(); // 컴포넌트가 마운트될 때 데이터를 가져옴
  }, []);

  // NOTE: difficulty를 숫자로 변환하기 위한 코드
  // const star = {
  //   VERY_EASY: 1,
  // };
  // img={star[difficulty]}

  return (
    <div>
      <S.TitleContainer>
        <S.Title>전체 레시피</S.Title>
        <Link to="/all">
          <S.Button>더보기</S.Button>
        </Link>
      </S.TitleContainer>
      <S.AllRecipeBoxContainer>
        {recipes.map(({ food_id, username, food_Image, title, difficulty }) => (
          <RecipeBox
            key={food_id}
            //profileImage={profileImage}
            nickname={username}
            foodImage={food_Image}
            foodName={title}
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
