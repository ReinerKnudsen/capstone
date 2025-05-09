import { createAction } from '@utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPE } from './category.types';

// Here is where we set the actual store

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);
