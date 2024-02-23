import axios from 'axios';
import * as S from './postInfo.style';
import React, { useRef, useState, useEffect } from 'react';
import { FoodImage } from '../foodImage';
import { Comment } from '../../comment';
import { profileImages } from '../../profileImages.const';

export function PostInfo() {
  const [recipe, setRecipe] = useState({});
  const [starImage, setStarImage] = useState('');
  const [date, setDate] = useState('');
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const { data } = await axios.get('/foods/2');
        setRecipe(data);
        const difficulty = data.difficulty || '';
        setStarImage(`/assets/star${difficulty}.png`);
        const foodDate = data.food_date || '';
        setDate(foodDate.substring(0, 10));
      } catch (error) {
        console.error('Error fetching recipe: ', error);
      }
    };
    fetchRecipe();
  }, []);

  const commentRef = useRef(null); // Ref를 생성
  const scrollToComment = () => {
    if (commentRef.current) {
      commentRef.current.scrollIntoView({ behavior: 'smooth' }); // Ref의 위치로 스크롤
    }
  };

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(12);
  const toggleLike = () => {
    setLiked(liked => !liked);
    setLikeCount(likeCount => (liked ? likeCount - 1 : likeCount + 1));
  };

  return (
    <>
      <S.GlobalStyle />
      <S.TitleBox>
        <S.Title>{recipe.title}</S.Title>
        <S.Date>{date}</S.Date>
      </S.TitleBox>
      <S.RecipeContainer>
        <S.PostInfoContainer>
          <FoodImage foodImage={recipe.food_image} userNickname={recipe.username} profileImage={profileImages[7]} />
          <S.ButtonContainer>
            <S.Button onClick={scrollToComment} style={{ marginRight: '30px' }}>
              <S.Icon src="/assets/comment.png" />
              댓글 5 {/*comments.length*/}
            </S.Button>
            <S.Button onClick={toggleLike}>
              {liked ? <S.Icon src="/assets/likefill.png" /> : <S.Icon src="/assets/like.png" />}
              좋아요 {likeCount}
            </S.Button>
          </S.ButtonContainer>
        </S.PostInfoContainer>
        <S.RightSide>
          <S.TextContainer>
            <S.Text>카테고리</S.Text>
            <S.Text style={{ fontWeight: 'normal' }}>{recipe.category}</S.Text>
          </S.TextContainer>
          <S.TextContainer>
            <S.Text>난이도</S.Text>
            <S.StarImage src={starImage} />
          </S.TextContainer>
          <S.Text style={{ marginBottom: '10px' }}>재료</S.Text>
          <S.Text style={{ fontWeight: 'normal' }}>{recipe.ingredients}</S.Text>
          <S.Text style={{ marginBottom: '10px' }}>레시피 STEP</S.Text>
          <S.Text style={{ fontWeight: 'normal' }}>{recipe.content}</S.Text>
        </S.RightSide>
      </S.RecipeContainer>
      {/*Ref를 Comment 컴포넌트에 부착 */}
      <div ref={commentRef}>
        <Comment />
      </div>
    </>
  );
}
