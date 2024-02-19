import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  justify-content: center;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 30px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  max-width: 960px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: block;
  width: 300px;
`;

export const Select = styled.select`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: block;
  width: 330px;
`;

export const ImageUploadContainer = styled.div`
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

export const TextAreaContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

export const TextArea = styled.textarea`
  width: 670px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 200px;
  resize: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 670px;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #e1e1e1;
  }
`;

export const ImageUploadButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: none;
  cursor: pointer;
  &:hover {
    color: #ccc;
  }
`;

export const FileInput = styled.input`
  display: none;
`;
