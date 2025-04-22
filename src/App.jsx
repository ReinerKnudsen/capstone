import { Routes, Route } from 'react-router';
import Home from './routes/home/home.route';
import Shop from './routes/shop/shop.route';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
