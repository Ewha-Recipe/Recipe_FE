import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from './random.style';
import { RecipeBox } from '../recipeBox';

export function Random() {
  const [recipes, setRecipes] = useState([]);
  const recipesLength = recipes.length;
  const startIndex = Math.max(0, recipesLength - 5);

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
      <S.Title>오늘의 추천</S.Title>
      <S.RandomRecipeBoxContainer>
        {recipes.slice(startIndex, recipesLength).map(({ food_id, username, food_image, title, difficulty }) => (
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
      </S.RandomRecipeBoxContainer>
    </div>
  );
}
