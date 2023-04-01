import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FaShoppingCart, FaUserPlus, FaUserMinus } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';

const NavUser = () => {
  const { loginWithRedirect, logout } = useAuth0();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  let userImage;
  if (user) userImage = user.picture;
  return (
    <Link className="btn-nav">
      {!isAuthenticated ? (
        <FaUserPlus size={25} onClick={() => loginWithRedirect()} />
      ) : (
        <div
          className="flex items-center justify-between"
          onClick={() => {
            // logout & clear local storage
            logout({ logoutParams: { returnTo: window.location.origin } });
            localStorage.clear();
          }}
        >
          <img
            src={userImage}
            alt="user image"
            className="w-5 h-5 rounded-[50%] mr-2"
          />
          <FaUserMinus size={25} />
        </div>
      )}
    </Link>
  );
};
export default NavUser;
