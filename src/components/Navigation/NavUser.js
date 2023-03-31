import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FaShoppingCart, FaUserPlus, FaUserMinus } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';

const NavUser = () => {
  const { loginWithRedirect, logout } = useAuth0();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  console.log('user-isAuthenticated', isAuthenticated);
  console.log('user-user', user);

  return (
    <Link className="btn-nav">
      {!isAuthenticated ? (
        <FaUserPlus size={25} onClick={() => loginWithRedirect()} />
      ) : (
        <FaUserMinus
          size={25}
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        />
      )}
    </Link>
  );
};
export default NavUser;

/* user from Auth0
{
    "nickname": "test.furni.store.spa",
    "name": "test.furni.store.spa@gmail.com",
    "picture": "https://s.gravatar.com/avatar/ea86b81df47789414398972fcdd523c0?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
    "updated_at": "2023-03-31T04:06:05.742Z",
    "email": "test.furni.store.spa@gmail.com",
    "email_verified": false,
    "sub": "auth0|64265a1cd008ca1da5ecb473"
}
*/
