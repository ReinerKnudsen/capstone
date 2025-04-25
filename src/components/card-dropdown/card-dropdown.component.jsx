import { useContext } from 'react';

import Button from '../button/button.component';
import CardItem from '../cart-item/cart-item.component';

import { CartContext } from '../../contexts/cart.context';

import './card-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='card-items'>
        {cartItems.map((item) => (
          <CardItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
