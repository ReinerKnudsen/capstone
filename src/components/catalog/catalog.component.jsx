import './catalog.styles.scss';

import CategoryItem from '../category-item/category-item.component';

const CategoryCatalog = ({ categories }) => {
  return (
    <div className='catalog-container'>
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default CategoryCatalog;
