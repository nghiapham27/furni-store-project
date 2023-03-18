import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import { FaBars, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Brand, SideBar } from '../components';
import { useState } from 'react';

const NavBar = () => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      {/*Main Nav */}
      <nav className="w-full bg-gray-200">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-4 px-4">
          {/* Brand logo */}
          <Brand />
          {/* Nav List */}
          <ul className="hidden md:flex text-xl flex-shrink-0 justify-between items-center min-w-[300px] font-bold">
            {links.map(({ id, text, url }) => {
              return (
                <li key={id}>
                  <Link
                    to={url}
                    className="hover:underline active:text-amber-500"
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* Cart & Login */}
          <div className="hidden min-w-[200px] md:flex justify-center items-center">
            <Link to="cart" className="btn-nav mr-4">
              <span>Cart</span>
              <div className="relative">
                <FaShoppingCart size={25} />
                <span className="absolute -top-4 left-4 text-red-500 bg-yellow-300 rounded-full text-xl h-8 w-8 flex items-center justify-center">
                  10
                </span>
              </div>
            </Link>
            <Link className="btn-nav">
              <FaUser size={25} className />
              Login
            </Link>
          </div>
          {/* Bar Button */}
          <button
            className="text-gray-800 md:hidden"
            onClick={() => setSideBar(!sideBar)}
          >
            <FaBars size={30} />
          </button>
        </div>
      </nav>
      {/* SideBar */}

      <SideBar onSideBar={() => setSideBar(!sideBar)} sideBar={sideBar} />
    </>
  );
};
export default NavBar;
