import { Link } from 'react-router';

import { CategoryItemContainer, BackgroundImage, Body } from './category-item.style';

const CategoryItem = ({ id, title, imageUrl }) => {
  return (
    <CategoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>
          <Link to={`/shop/${title}`}>{title}</Link>
        </h2>
        <p>Shop Now</p>
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
