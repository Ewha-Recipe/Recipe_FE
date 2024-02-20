import styled from 'styled-components';

export const RecipeBoxContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-left: 85px;
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-top: 80px;
  margin-left: 85px;
`;
