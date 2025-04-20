import categories from './categories.json';
import CategoryCatalog from './components/catalog/catalog.component';

const App = () => {
  return <CategoryCatalog categories={categories} />;
};

export default App;
