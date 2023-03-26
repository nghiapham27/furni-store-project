import { FaBars } from 'react-icons/fa';
import { Brand, NavList, NavUser, SideBar } from '../components';
import { useState } from 'react';

const NavBar = () => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      {/*Main Nav */}
      <nav className="w-full bg-gray-200">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-3 px-4">
          <Brand />
          <NavList />
          <NavUser />
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
