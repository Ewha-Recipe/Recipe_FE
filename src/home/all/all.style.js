import styled from 'styled-components';

export const AllRecipeBoxContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-left: 80px;
  margin-bottom: 55px;
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 35px;
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-left: 85px;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  margin-right: 30px;
  color: gray;
  cursor: pointer;
  &:hover {
    color: #e1e1e1;
  }
`;
