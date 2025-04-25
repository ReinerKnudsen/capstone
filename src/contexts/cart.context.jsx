import { createContext, useState } from 'react';

/**
 * type Product = {
 *  id: number;
 *  name: string;
 *  price: number;
 *  imageUrl: string
 * }
 *
 * type CartItem = {
 *  product: Product;
 *  quantity: number
 * }
 */

const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCard: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };
  return <CartContext.Provider value={value}> {children} </CartContext.Provider>;
};
