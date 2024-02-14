import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './createPost.style';

export function CreatePost() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const STAR_OPTION = [1, 2, 3, 4, 5];
  const MENU_OPTION = ['한식', '일식', '중식', '양식', '분식', '디저트'];

  const handleImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  const handleClickImageUpload = () => {
    const fileInput = document.getElementById('imageUpload');
    fileInput.click();
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <>
      <S.GlobalStyle />
      <S.Container>
        <S.Title>레시피 등록</S.Title>
        <S.FormContainer>
          <S.FormColumn>
            <S.ImageUploadContainer>
              {image ? (
                <img src={image} alt="Uploaded" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              ) : (
                <>
                  <S.ImageUploadButton onClick={handleClickImageUpload}>이미지 업로드</S.ImageUploadButton>
                  <S.FileInput type="file" id="imageUpload" accept="image/*" onChange={handleImageChange} />
                </>
              )}
            </S.ImageUploadContainer>
          </S.FormColumn>
          <S.FormColumn>
            <S.Form>
              <S.Input placeholder="제목" />
              <S.Input placeholder="날짜" type="date" />
              <S.Select defaultValue="">
                <option value="" disabled>
                  난이도 선택
                </option>
                {STAR_OPTION.map(star => (
                  <option key={star} value={star}>
                    {star}
                  </option>
                ))}
              </S.Select>
              <S.Select defaultValue="">
                <option value="" disabled>
                  난이도 선택
                </option>
                {STAR_OPTION.map(star => (
                  <option key={star} value={star}>
                    {star}
                  </option>
                ))}
              </Select>
              <Select defaultValue="">
                <option value="" disabled>
                  카테고리 선택
                </option>
                {MENU_OPTION.map(menu => (
                  <option key={menu} value={menu.toLowerCase()}>
                    {menu}
                  </option>
                ))}
              </S.Select>
              <S.Input placeholder="재료" />
            </S.Form>
          </S.FormColumn>
        </S.FormContainer>
        <S.TextAreaContainer>
          <S.TextArea placeholder="설명" />
        </S.TextAreaContainer>
        <S.ButtonContainer>
          <S.Button type="button" onClick={handleCancel}>
            취소
          </S.Button>
          <S.Button type="submit">등록하기</S.Button>
        </S.ButtonContainer>
      </S.Container>
    </>
  );
}
