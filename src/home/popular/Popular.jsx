import axios from 'axios';
import { useEffect, useState } from 'react';
import { RecipeBox } from '../recipeBox';
import * as S from './popular.style';
import { profileImages } from '../../profileImages.const';

export function Popular() {
  const [recipes, setRecipes] = useState([]);

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

  const indexToFetch = [2, 3, 4, 7, 8];
  const filteredRecipes = recipes.filter((recipe, index) => indexToFetch.includes(index));

  return (
    <div>
      <S.Title>인기 레시피</S.Title>
      <S.RecipeBoxContainer>
        {filteredRecipes.map(({ food_id, username, food_image, title, difficulty }, index) => (
          <RecipeBox
            key={food_id}
            profileImage={profileImages[indexToFetch[index]]}
            nickname={username}
            foodImage={food_image}
            foodName={title}
            difficulty={difficulty}
            width="380px"
            height="380px"
          />
        ))}
      </S.RecipeBoxContainer>
    </div>
  );
}
