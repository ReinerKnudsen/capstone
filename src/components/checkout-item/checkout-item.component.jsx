import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {
  CheckoutItemContainer,
  CheckoutImageContainer,
  CheckoutImage,
  CheckoutName,
  CheckoutQuantity,
  CheckoutPrice,
  CheckoutArrow,
  CheckoutValue,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const increaseQuantityHandler = () => addItemToCart(cartItem);
  const decreaseQuantityHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <CheckoutImage src={imageUrl} alt={name} />
      </CheckoutImageContainer>
      <CheckoutName>{name}</CheckoutName>
      <CheckoutQuantity>
        <CheckoutArrow onClick={decreaseQuantityHandler}>&#10094;</CheckoutArrow>
        <CheckoutValue>{quantity}</CheckoutValue>
        <CheckoutArrow onClick={increaseQuantityHandler}>&#10095;</CheckoutArrow>
      </CheckoutQuantity>
      <CheckoutPrice>{price}</CheckoutPrice>
      <span className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </span>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
