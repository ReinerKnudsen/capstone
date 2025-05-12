import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsCartOpen,
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.action.js';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutHeaderBlock,
  CheckoutTotal,
} from './checkout.styles.jsx';

const tableHeader = [
  { id: 1, title: 'Product' },
  { id: 2, title: 'Description' },
  { id: 3, title: 'Quantity' },
  { id: 4, title: 'Price' },
  { id: 5, title: 'Remove' },
];

const Checkout = () => {
  //  const { cartItems, setIsCartOpen, cartTotal } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const isCartOpen = useSelector(selectIsCartOpen);

  useEffect(() => {
    dispatch(setIsCartOpen(!isCartOpen));
  }, []);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        {tableHeader.map((header) => (
          <CheckoutHeaderBlock key={header.id}>
            <span>{header.title}</span>
          </CheckoutHeaderBlock>
        ))}
      </CheckoutHeader>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <CheckoutTotal>Total: € {cartTotal}</CheckoutTotal>
    </CheckoutContainer>
  );
};

export default Checkout;
