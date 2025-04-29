import styled from 'styled-components';
import { Link } from 'react-router';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const CategoryPreviewTitle = styled(Link)`
  font-size: 38px;
  font-weight: 400;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const CategoryPreviewView = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
