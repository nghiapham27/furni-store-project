import { FaBars } from 'react-icons/fa';
import { Brand, NavList, NavCart, NavUser, SideBar } from '..';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    // stick navbar
    const navHeight = document
      .querySelector('nav')
      .getBoundingClientRect().height; //nav's height
    window.addEventListener('scroll', () => {
      const yPos = window.scrollY;
      yPos >= navHeight ? setStickyNav(true) : setStickyNav(false);
    });
    // no need to remove event listener bc it's mounted in root page
  }, []);

  return (
    <>
      {/*Main Nav */}
      <nav
        className={`relative w-full max-w-[1600px] mx-auto bg-gray-200 shadow-md px-4 z-10 ${
          stickyNav ? 'sticky top-0' : ''
        }`}
      >
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-2 px-4">
          <Brand />
          <NavList />
          <div className="hidden min-w-max md:flex justify-center items-center">
            <NavCart />
            <NavUser />
          </div>
          {/* Bar Button for SideBar */}
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
