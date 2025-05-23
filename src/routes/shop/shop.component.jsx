import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useDispatch } from 'react-redux';

import { getCategoriesAndDocuments } from '@utils/firebase.utils';

import { setCategories } from '@store/categories/category.action';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      // update categories store with base data
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
