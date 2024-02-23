import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 55px;
    overflow-x: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, and Opera */
    }
`;

export const TitleBox = styled.div`
  display: flex;
  height: 100px;
  margin: 0 85px;
  margin-top: 35px;
  border-radius: 10px;
  background-color: #f4f4f4;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.text`
  font-size: 32px;
  font-weight: bold;
  margin-left: 40px;
`;

export const Date = styled.text`
  font-size: 20px;
  margin-right: 40px;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 85px;
  margin-top: 30px;
  justify-content: center;
`;

export const PostInfoContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  width: 235px;
  height: 80px;
  background-color: #eeeeee;
  border: 1px solid #797979;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  font-size: 20px;
`;

export const Icon = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 14px;
`;

export const RightSide = styled.div`
  min-width: 300px;
  height: 610px;
  padding-top: 15px;
  margin-left: 80px;
`;

export const Text = styled.text`
  display: block;
  margin-right: 15px;
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: bold;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StarImage = styled.img`
  height: 35px;
`;