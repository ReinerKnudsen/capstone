import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store/categories/category.selector.js';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoryViewContainer, CategoryViewTitle, CategoryContainer } from './category.styles.jsx';

const Category = () => {
  // get the current category from the url parameter
  const { category } = useParams();
  // get the categoriesMap from the store
  const categoriesMap = useSelector(selectCategoriesMap);

  // set state; we want to make sure to not always load data on render
  const [products, setProducts] = useState(categoriesMap[category]);

  // load data only if category or categoriesMap change
  // the data loads asyncronously; therefore `categoriesMap` might be empty on render; using the safeguard "products && products.map..." makes sure we only render if data is availables
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <CategoryViewContainer>
      <CategoryViewTitle>{category}</CategoryViewTitle>
      <CategoryContainer>
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </CategoryContainer>
    </CategoryViewContainer>
  );
};

export default Category;
