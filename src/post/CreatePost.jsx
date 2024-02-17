import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  justify-content: center;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 30px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  max-width: 960px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: block;
  width: 300px;
`;

const Select = styled.select`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: block;
  width: 330px;
`;

const ImageUploadContainer = styled.div`
  margin-bottom: 20px;
  margin-left: 100px;
  border: 1px dashed #ccc;
  border-radius: 4px;
  height: 300px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextAreaContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const TextArea = styled.textarea`
  width: 670px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 200px;
  resize: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 670px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #e1e1e1;
  }
`;

const ImageUploadButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: none;
  cursor: pointer;
  &:hover {
    color: #ccc;
  }
`;

const FileInput = styled.input`
  display: none;
`;

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
      <GlobalStyle />
      <Container>
        <Title>레시피 등록</Title>
        <FormContainer>
          <FormColumn>
            <ImageUploadContainer>
              {image ? (
                <img src={image} alt="Uploaded" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              ) : (
                <>
                  <ImageUploadButton onClick={handleClickImageUpload}>이미지 업로드</ImageUploadButton>
                  <FileInput type="file" id="imageUpload" accept="image/*" onChange={handleImageChange} />
                </>
              )}
            </ImageUploadContainer>
          </FormColumn>
          <FormColumn>
            <Form>
              <Input placeholder="제목" />
              <Input placeholder="날짜" type="date" />
              <Select defaultValue="">
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
              </Select>
              <Input placeholder="재료" />
            </Form>
          </FormColumn>
        </FormContainer>
        <TextAreaContainer>
          <TextArea placeholder="설명" />
        </TextAreaContainer>
        <ButtonContainer>
          <Button type="button" onClick={handleCancel}>
            취소
          </Button>
          <Button type="submit">등록하기</Button>
        </ButtonContainer>
      </Container>
    </>
  );
}
