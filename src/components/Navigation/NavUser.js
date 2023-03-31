import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FaShoppingCart, FaUserPlus, FaUserMinus } from 'react-icons/fa';
import { useAuth0 } from '@auth0/auth0-react';

const NavUser = () => {
  const { loginWithRedirect, logout } = useAuth0();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  let userImage;
  if (user) userImage = user.picture;
  console.log('user-isAuthenticated', isAuthenticated);

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

eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZXYtamcwcHRuaWpsb20wNDBucy51cy5hdXRoMC5jb20vIn0..2DR4h3onHN7yDW43.2ejsldTLlz23P53-CLrnauNgD1WyWvF6gWdTUc2DeRH50YFZBSe30fgK6rNIc9gUaaaw4omXedXEbWwS8a0_KR7lLkOVRTRyiMfvCdiOS3WGrNHU-hU_Ic6hIFNo6SgD19JELPFZvKYVvH8baO6_LDZawhDrlgoaiiZyieEmZkVvmwFik5l2YfYTPkZlwbzdaV7Ws8pljY_oFzlPTkTyUyYCdbirGdOXCDnFU7m5Iq6yPcbdVMSzzz8CkKPqAJ77242aFhymOeI2oqgC8aT11CehV3_uv7UXr_Cqd5LeJCuZOZ4q9kI1G5y3F-JpmE1KsZmRucC9tJFSsEtfHB4rRG6e.N8IO7xtKs9L5OUG0DUZftA

eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZXYtamcwcHRuaWpsb20wNDBucy51cy5hdXRoMC5jb20vIn0..ltOXHyxP9gLdeVXR.k4j5BnIEdJ-5ZED60xQY7DnONEJqEcJBJW4WwlXLqwl5FoN_YBEWcrkO_5gxoZwbyRpv3ijOD_Xr7Wewnqkc2xGSXv0BpLcew_3L7MPmmJiqC8Dv-qfEVLgTk3ZjkGfelKiIDACq0S_0SBoQyzuQ9vjSENzpD1nmbWNH29leSjntlIxv-LnN5yiWNjYCz3ZHa5I9IGSQAlycD2cSZb0JAcAiZA5xRnpN1Hh6VQzs_3qhknm96O9CaKpTxOfYH1yMn3mSCTnjGyXdJ7nW8YqppKgjd7m1VwjtpATKKJYP2PM_yayheWBrmR-Y8cQNVSwtPGDo5xWCppyNJPzZNj6dLf4A.EYqpV9oNYHHQSwAFQn4ucQ

*/
