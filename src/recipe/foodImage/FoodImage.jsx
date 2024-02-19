import * as S from './foodImage.style';

export function FoodImage({ foodImage, profileImage, userNickname }) {
  return (
    <div>
      <S.Image src={foodImage} />
      <S.ProfileContainer>
        <S.ProfileImage src={profileImage} />
        <S.Nickname>{userNickname}</S.Nickname>
      </S.ProfileContainer>
    </div>
  );
}
