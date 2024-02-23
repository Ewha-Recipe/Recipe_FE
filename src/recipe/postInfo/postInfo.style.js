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
  width: 1690px;
  height: 100px;
  margin: 0 85px;
  margin-top: 35px;
  border-radius: 10px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.text`
  font-size: 32px;
  font-weight: bold;
  margin-left: 20px;
`;

export const Date = styled.text`
  font-size: 20px;
  margin-right: 20px;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 85px;
  margin-top: 30px;
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

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftSide = styled.div`
  width: 550px;
  height: 610px;
  margin-left: 55px;
`;

export const RightSide = styled.div`
  border-left: 1px solid #797979;
  width: 550px;
  height: 615px;
  padding-left: 50px;
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
