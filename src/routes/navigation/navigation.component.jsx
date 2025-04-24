import { useContext } from 'react';
import { Outlet, Link } from 'react-router';

import { signOutUser } from '../../utils/firebase.utils';

import { UserContext } from '../../contexts/user.context';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>
              SignOut{' '}
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              Sign In
            </Link>
          )}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;
