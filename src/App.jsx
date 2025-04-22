import { Routes, Route } from "react-router";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.route";
import Shop from "./routes/shop/shop.route";
import SignIn from "./routes/sign-in/sign-in.route";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
