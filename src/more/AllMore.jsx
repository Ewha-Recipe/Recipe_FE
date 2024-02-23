import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from './allMore.style';
import { RecipeBox } from '../home/recipeBox';
import { Navbar } from '../navbar';
import { profileImages } from '../profileImages.const';

export function AllMore() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const { data } = await axios.get('/foods');
        // 데이터가 배열이 아닌 경우 빈 배열로 설정
        setRecipes(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching recipes: ', error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <Navbar />
      <S.AllRecipeContainer>
        <S.Title>전체 레시피</S.Title>
        <S.RecipeBoxContainer>
          {recipes.map(({ food_id, username, food_image, title, difficulty }, index) => (
            <RecipeBox
              key={food_id}
              profileImage={profileImages[index]}
              nickname={username}
              foodImage={food_image}
              foodName={title}
              difficulty={difficulty}
              width="315px"
              height="315px"
            />
          ))}
        </S.RecipeBoxContainer>
      </S.AllRecipeContainer>
    </div>
  );
}
