import { Link, NavLink } from 'react-router-dom';
import { links } from '../../utils/constants';

const NavList = () => {
  return (
    <ul className="hidden md:flex text-xl flex-shrink-0 justify-between items-center min-w-[300px] font-bold">
      {links.map(({ id, text, url }) => {
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
