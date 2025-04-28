import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>checkout</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { name, id, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
