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
        onTop ? 'translate-y-[80vh]' : 'translate-y-[110vh]'
      } text-blue-400 z-10 w-[40px] h-[40px] bg-gray-600/50 rounded-[50%] cursor-pointer hover:text-blue-600 hover:bg-gray-300/50 transition-transform duration-700 fixed right-[10vw]`}
      onClick={backToTopHandler}
    >
      <MdKeyboardDoubleArrowUp size={40} />
    </div>
  );
};
export default BackToTop;
