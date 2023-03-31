import { Brand, NavCart, NavUser } from '..';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

import { links } from '../../utils/constants';
import { useSelector } from 'react-redux';

const SideBar = ({ onSideBar, sideBar }) => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      {/* // overlay */}
      {sideBar && (
        <div
          className="fixed top-0 left-0 h-full min-h-screen w-full bg-black/50 z-10"
          onClick={() => onSideBar()}
        ></div>
      )}
      {/* sidebar */}
      <div
        className={` fixed top-0 bg-gray-50 h-screen w-[320px] p-4 border border-gray-400 z-20 transition-all duration-1000 ${
          sideBar ? 'left-0' : '-left-[100%]'
        } `}
      >
        {/* brand logo */}
        <Brand />
        <button>
          <AiOutlineClose
            size={20}
            className="absolute right-4 top-4"
            onClick={() => onSideBar()}
          />
        </button>
        {/* nav list */}
        <ul className="text-lg flex flex-col justify-evenly items-left font-bold py-8">
          {links.map(({ id, text, url }) => {
            if (url === 'checkout' && isAuthenticated === false) return;
            return (
              <li
                key={id}
                className="w-min pb-4 last:pb-0 hover:underline"
                onClick={() => onSideBar()}
              >
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        {/* nav buttons */}
        <div className="w-full flex justify-center items-center">
          <div onClick={() => onSideBar()}>
            <NavCart />
          </div>
          <div onClick={() => onSideBar()}>
            <NavUser />
          </div>
        </div>
      </div>
    </>
  );
};
export default SideBar;
