import categories from '../../categories.json';
import CategoryCatalog from '../../components/catalog/catalog.component';

const Home = () => {
  return <CategoryCatalog categories={categories} />;
};

export default Home;
