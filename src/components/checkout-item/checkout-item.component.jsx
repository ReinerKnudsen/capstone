import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../store/cart/cart.action';

import {
  CheckoutItemContainer,
  CheckoutImageContainer,
  CheckoutImage,
  CheckoutName,
  CheckoutQuantity,
  CheckoutPrice,
  CheckoutArrow,
  CheckoutValue,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const increaseQuantityHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem));
  const decreaseQuantityHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <CheckoutImage src={imageUrl} alt={name} />
      </CheckoutImageContainer>
      <CheckoutName>{name}</CheckoutName>
      <CheckoutQuantity>
        <CheckoutArrow onClick={decreaseQuantityHandler}>
          &#10094;
        </CheckoutArrow>
        <CheckoutValue>{quantity}</CheckoutValue>
        <CheckoutArrow onClick={increaseQuantityHandler}>
          &#10095;
        </CheckoutArrow>
      </CheckoutQuantity>
      <CheckoutPrice>{price}</CheckoutPrice>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
