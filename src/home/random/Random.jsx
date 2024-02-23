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
        if (Array.isArray(data)) {
          setRecipes(data);
        } else {
          console.error('Fetched data is not an array:', data);
          setRecipes([]);
        }
      } catch (error) {
        console.error('Error fetching recipes: ', error);
        setRecipes([]);
      }
    };
    fetchRecipes();
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
