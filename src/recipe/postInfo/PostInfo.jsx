import * as S from './postInfo.style';
import { recipe } from './postInfo.const';

function PostInfo() {
  return (
    <S.RecipeContainer>
      <S.FoodImageContainer src={recipe.foodImage} />
      <S.ProfileContainer>
        <S.ProfileImage src={recipe.profileImage} />
        <S.Nickname>사용자1</S.Nickname>
      </S.ProfileContainer>
      <S.ButtonContainer>
        <S.Button style={{ marginRight: '30px' }}>
          <S.Icon src="./comment.png" />
          댓글 {recipe.comment}
        </S.Button>
        <S.Button>
          <S.Icon src="./like.png" />
          좋아요 {recipe.like}
        </S.Button>
      </S.ButtonContainer>
    </S.RecipeContainer>
  );
}

export default PostInfo;
