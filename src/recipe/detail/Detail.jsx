import * as S from './detail.style';

function Detail() {
  return (
    <S.DetailContainer>
      <S.LeftSide>
        <S.Text>카테고리</S.Text>
        <S.Text>난이도</S.Text>
        <S.Text style={{ marginBottom: '10px', fontWeight: 'bold' }}>재료</S.Text>
      </S.LeftSide>
      <S.RightSide>
        <S.Text style={{ marginBottom: '10px', fontWeight: 'bold' }}>레시피 STEP</S.Text>
      </S.RightSide>
    </S.DetailContainer>
  );
}

export default Detail;
