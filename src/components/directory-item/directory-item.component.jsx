import { useNavigate } from 'react-router';

import {
  CategoryItemContainer,
  BackgroundImage,
  Body,
} from './directory-item.style';

const DirectoryItem = ({ title, imageUrl, route }) => {
  const navigate = useNavigate();

  const onNavigate = () => navigate(route);

  return (
    <CategoryItemContainer onClick={onNavigate}>
      <BackgroundImage $imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryItemContainer>
  );
};

export default DirectoryItem;
