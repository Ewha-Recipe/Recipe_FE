import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RecipeBox } from '../recipeBox';
import * as S from './all.style';

export function All() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const { data } = await axios.get('/foods');
        setRecipes(data);
        // NOTE: 데이터 확인용 - 서연님 확인 후 콘솔 지워주세요~
        console.log(data);
      } catch (error) {
        console.error('Error fetching recipes: ', error);
      }
    };
    fetchRecipes(); // 컴포넌트가 마운트될 때 데이터 가져옴
  }, []);

  return (
    <div>
      <S.TitleContainer>
        <S.Title>전체 레시피</S.Title>
        <Link to="/all">
          <S.Button>더보기</S.Button>
        </Link>
      </S.TitleContainer>
      <S.AllRecipeBoxContainer>
        {recipes.slice(0, 5).map(({ food_id, username, food_image, title, difficulty }) => (
          <RecipeBox
            key={food_id}
            profileImage={'/assets/id.png'}
            nickname={username}
            foodImage={food_image}
            foodName={title}
            difficulty={difficulty}
            width="380px"
            height="380px"
          />
        ))}
      </S.AllRecipeBoxContainer>
    </div>
  );
}
