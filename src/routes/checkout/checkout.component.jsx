import { useContext, useEffect } from 'react';

import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const tableHeader = [
  { id: 1, title: 'Product' },
  { id: 2, title: 'Description' },
  { id: 3, title: 'Quantity' },
  { id: 4, title: 'Price' },
  { id: 5, title: 'Remove' },
];

const Checkout = () => {
  const { cartItems, setIsCartOpen, cartTotal } = useContext(CartContext);

  useEffect(() => {
    setIsCartOpen(false);
  }, []);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        {tableHeader.map((header) => (
          <div key={header.id} className='header-block'>
            <span>{header.title}</span>
          </div>
        ))}
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className='total'>Total: € {cartTotal}</span>
    </div>
  );
};

export default Checkout;
