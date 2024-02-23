import axios from 'axios';
import React, { useState, useEffect } from 'react';
import * as S from './comment.style';
import { CommentBox } from './commentBox';
import { dateArray, profileImages } from './comment.const';

export function Comment() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { data } = await axios.get('/foods/2/comments');
        if (Array.isArray(data)) {
          setComments(data);
        } else {
          console.error('Fetched data is not an array:', data);
          setComments([]);
        }
      } catch (error) {
        console.error('Error fetching recipes: ', error);
        setComments([]);
      }
    };
    fetchComments();
  }, []);

  const [inputComment, setInputComment] = useState('');

  const inputChange = event => {
    setInputComment(event.target.value);
  };

  return (
    <>
      <S.WriteContainer>
        <S.ButtonContainer>
          <S.Title style={{ fontWeight: 'bold' }}>댓글 작성</S.Title>
          <S.WriteButton>완료</S.WriteButton>
        </S.ButtonContainer>
        <S.WriteComment type="text" value={inputComment} onChange={inputChange} placeholder="댓글을 남겨주세요!" />
      </S.WriteContainer>
      <S.TitleContainer>
        <S.Icon src="/assets/comment.png" />
        <S.Title>전체 댓글 {comments.length}</S.Title>
      </S.TitleContainer>
      {comments.map(({ username, content }, index) => (
        <CommentBox profileImage={profileImages[index]} nickname={username} date={dateArray[index]} comment={content} />
      ))}
    </>
  );
}
