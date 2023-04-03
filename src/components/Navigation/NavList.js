import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { links } from '../../utils/constants';

const NavList = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <ul className="hidden md:flex md:max-w-max text-lg flex-shrink-0 justify-between items-center min-w-[300px] font-bold">
      {links.map(({ id, text, url }) => {
        if (url === 'checkout' && isAuthenticated === false) return;
        return (
          <li key={id}>
            <NavLink
              to={url}
              className={({ isActive }) => (isActive ? 'text-amber-600' : '')}
              end
            >
              <span className="hover:underline">{text}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
export default NavList;
