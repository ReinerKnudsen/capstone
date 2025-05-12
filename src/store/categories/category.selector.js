import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => {
  // state {categories: {categories: []}, user: {currentUser: null}}
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoryReducer], // input selector
  (categoriesSlice) => {
    return categoriesSlice.categories; // output selector, only runs if the inpout selector returns a different value
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
