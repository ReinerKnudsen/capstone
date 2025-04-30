import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  CategoryPreviewView,
} from './category-preview.styles.jsx';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewTitle to={title} className='title'>
          {title}
        </CategoryPreviewTitle>
      </h2>
      <CategoryPreviewView>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewView>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
