import categories from '../../categories.json';
import CategoryCatalog from '../../components/catalog/catalog.component';

const Home = () => {
  return (
    <div>
      <CategoryCatalog categories={categories} />
    </div>
  );
};

export default Home;
