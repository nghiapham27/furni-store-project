import { Brand } from '../components';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import { links } from '../utils/constants';

const SideBar = ({ onSideBar, sideBar }) => {
  return (
    <div>
      {/* // overlay */}
      {sideBar && (
        <div
          className="absolute top-0 left-0 h-screen w-screen bg-black/50 z-10"
          onClick={() => onSideBar()}
        ></div>
      )}
      {/* sidebar */}
      <div
        className={`absolute top-0 bg-gray-50 h-screen w-[320px] p-4 border border-gray-400 z-20 transition-all duration-1000 ${
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
            return (
              <li
                key={id}
                className="w-min pb-4 last:pb-0"
                onClick={() => onSideBar()}
              >
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        {/* nav buttons */}
        <div className="w-full flex justify-center items-center">
          <Link to="cart" className="btn-nav mr-4" onClick={() => onSideBar()}>
            <span>Cart</span>
            <div className="relative">
              <FaShoppingCart size={30} />
              <span className="absolute -top-4 left-4 text-red-500 bg-yellow-300 rounded-full text-xl h-8 w-8 flex items-center justify-center">
                10
              </span>
            </div>
          </Link>
          <Link className="btn-nav" onClick={() => onSideBar()}>
            <FaUser size={30} className />
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
