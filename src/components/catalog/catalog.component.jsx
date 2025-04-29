import CategoryItem from '../category-item/category-item.component';

import { CatalogContainer } from './catalog.styles.jsx';

const CategoryCatalog = ({ categories }) => {
  return (
    <CatalogContainer>
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </CatalogContainer>
  );
};

export default CategoryCatalog;
