import React, { useState } from 'react';
import * as S from './comment.style';
import { comments } from './comment.const';
import { CommentBox } from './commentBox';

export function Comment() {
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
      {comments.map(({ profileImage, nickname, date, comment }) => (
        <CommentBox profileImage={profileImage} nickname={nickname} date={date} comment={comment} />
      ))}
    </>
  );
}
