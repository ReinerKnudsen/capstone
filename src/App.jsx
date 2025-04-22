import { Routes, Route } from "react-router";
import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/home/home.route";
import Shop from "./routes/shop/shop.route";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
