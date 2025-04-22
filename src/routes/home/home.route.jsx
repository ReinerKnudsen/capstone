import { Outlet } from "react-router";

import categories from "../../categories.json";
import CategoryCatalog from "../../components/catalog/catalog.component";

const Home = () => {
  return (
    <div>
      <Outlet />
      <CategoryCatalog categories={categories} />
    </div>
  );
};

export default Home;
