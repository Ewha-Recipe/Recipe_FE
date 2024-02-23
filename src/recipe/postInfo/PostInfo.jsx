import * as S from './postInfo.style';
import React, { useRef, useState } from 'react';
import { recipe } from '../recipe.const';
import { FoodImage } from '../foodImage';
import { Comment } from '../../comment';
import { comments } from '../../comment/comment.const';

export function PostInfo() {
  const commentRef = useRef(null); // Ref를 생성
  const scrollToComment = () => {
    if (commentRef.current) {
      commentRef.current.scrollIntoView({ behavior: 'smooth' }); // Ref의 위치로 스크롤
    }
  };

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(recipe.like);
  const toggleLike = () => {
    setLiked(liked => !liked);
    setLikeCount(likeCount => (liked ? likeCount - 1 : likeCount + 1));
  };

  return (
    <>
      <S.GlobalStyle />
      <S.TitleBox>
        <S.Title>{recipe.foodName}</S.Title>
        <S.Date>{recipe.date}</S.Date>
      </S.TitleBox>
      <S.RecipeContainer>
        <S.PostInfoContainer>
          <FoodImage foodImage={recipe.foodImage} userNickname={recipe.nickname} profileImage={recipe.profileImage} />
          <S.ButtonContainer>
            <S.Button onClick={scrollToComment} style={{ marginRight: '30px' }}>
              <S.Icon src="/assets/comment.png" />
              댓글 {comments.length}
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
            <S.StarImage src={recipe.difficulty} />
          </S.TextContainer>
          <S.Text style={{ marginBottom: '10px' }}>재료</S.Text>
          <S.Text style={{ fontWeight: 'normal' }}>{recipe.ingredient}</S.Text>
          <S.Text style={{ marginBottom: '10px' }}>레시피 STEP</S.Text>
          <S.Text style={{ fontWeight: 'normal' }}>{recipe.step}</S.Text>
        </S.RightSide>
      </S.RecipeContainer>
      <div ref={commentRef}>
        <Comment />
      </div>
      {/*Ref를 Comment 컴포넌트에 부착 */}
    </>
  );
}