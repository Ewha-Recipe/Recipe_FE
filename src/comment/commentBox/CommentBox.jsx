import * as S from './commentBox.style';

export function CommentBox({ profileImage, nickname, date, comment }) {
  return (
    <S.BoxContainer>
      <S.InfoContainer>
        <S.ProfileContainer>
          <S.ProfileImage src={profileImage} />
          <S.Nickname>{nickname}</S.Nickname>
        </S.ProfileContainer>
        <S.Date>{date}</S.Date>
      </S.InfoContainer>
      <S.Content>{comment}</S.Content>
    </S.BoxContainer>
  );
}
