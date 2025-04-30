import styled from 'styled-components';

export const CategoryViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CategoryViewTitle = styled.h2`
  font-size: 38px;
  font-weight: 400;
  margin-bottom: 25px;
  text-align: center;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;
