import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>checkout</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { name, id, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <button onClick={() => removeItemFromCart(cartItem)}> &lt; </button>
              <span> {quantity} </span>
              <button onClick={() => addItemToCart(cartItem)}> &gt; </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
