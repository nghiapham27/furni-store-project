import { useEffect, useState } from 'react';

import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

const BackToTop = () => {
  const [onTop, setOnTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const yPos = window.scrollY;
      yPos > 500 ? setOnTop(true) : setOnTop(false);
    });
    // no need to remove event listener bc it's mounted in root page
  }, []);

  const backToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`${
        onTop
          ? ' fixed top-[90vh] right-[5vw]'
          : 'absolute -top-[100%] right-[5vw]'
      } text-blue-400 z-10 w-[30px] h-[30px] bg-gray-600/50 rounded-[50%] cursor-pointer hover:text-blue-600 hover:bg-gray-300/50`}
      onClick={backToTopHandler}
    >
      <MdKeyboardDoubleArrowUp size={30} />
    </div>
  );
};
export default BackToTop;
