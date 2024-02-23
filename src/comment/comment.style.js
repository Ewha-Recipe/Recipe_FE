import styled from 'styled-components';

export const WriteContainer = styled.div`
  display: flex;
  height: 400px;
  border-radius: 20px;
  margin: 0 85px;
  margin-top: 80px;
  background-color: #eeeeee;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 50px;
  padding-top: 20px;
`;

export const WriteButton = styled.button`
  height: 45px;
  width: 125px;
  border-radius: 25px;
  font-size: 24px;
  border: none;
  background-color: #b0b0b0;
  color: white;
`;

export const WriteComment = styled.textarea`
  height: 220px;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  margin: 0 40px;
  padding: 20px;
  resize: none;
`;

export const TitleContainer = styled.div`
  margin-left: 85px;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const Title = styled.p`
  font-size: 24px;
`;