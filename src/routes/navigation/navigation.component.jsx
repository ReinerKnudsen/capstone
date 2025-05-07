import { useContext } from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';

import { signOutUser } from '../../utils/firebase.utils';

import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../store/user/user.selector';

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from './navigation.styles';

//import './navigation.styles.jsx';

const Navigation = () => {
  // const currentUser= useSelector( (state) => state.user.currentUser)   ==>
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>Shop</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SignOut{' '}
            </NavLink>
          ) : (
            <NavLink to='/auth'>Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;
