import { useParams } from 'react-router';
import { useContext, useState, useEffect } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';

import ProductCard from '../../components/product-card/product-card.component';

import './category.styles.scss';

const Category = () => {
  // get the current category from the url parameter
  const { category } = useParams();
  // get the categoriesMap from the context
  const { categoriesMap } = useContext(CategoriesContext);

  // set state; we want to make sure to not always load data on render
  const [products, setProducts] = useState(categoriesMap[category]);

  // load data only if category or categoriesMap change
  // the data loads asyncronously; therefore `categoriesMap` might be empty on render; using the safeguard "products && products.map..." makes sure we only render if data is availables
  useEffect(() => {
    setProducts(categoriesMap[category]);
    console.log(products);
  }, [categoriesMap, category]);

  return (
    <div className='category-view-container'>
      <h2>{category}</h2>
      <div className='category-container'>
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default Category;
