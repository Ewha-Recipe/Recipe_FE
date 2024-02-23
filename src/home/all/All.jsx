import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RecipeBox } from '../recipeBox';
import * as S from './all.style';
import { profileImages } from '../../profileImages.const';

export function All() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const { data } = await axios.get('/foods');
        // 데이터가 배열인지 확인하고, 배열이 아니면 빈 배열을 설정
        if (Array.isArray(data)) {
          setRecipes(data);
        } else {
          console.error('Fetched data is not an array:', data);
          setRecipes([]); // 데이터 형식이 올바르지 않을 경우 빈 배열로 설정
        }
      } catch (error) {
        console.error('Error fetching recipes: ', error);
        setRecipes([]); // 에러 발생 시 빈 배열로 설정
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
        {recipes.slice(0, 5).map(({ food_id, username, food_image, title, difficulty }, index) => (
          <RecipeBox
            key={food_id}
            profileImage={profileImages[index]}
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
