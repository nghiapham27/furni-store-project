import Brand from './UI/Brand';
import { MdOutlineCopyright } from 'react-icons/md';

import { socialsList } from '../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-slate-500 max-w-[1600px] w-full min-h-[100px] mx-auto  py-2 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto md:mx-40">
        <Brand />
        <div className="grid grid-cols-4 gap-2 my-3 md:my-0">
          {socialsList.map((social) => {
            return (
              <div
                key={social.id}
                className="w-[30px] h-[30px] rounded-[50%] bg-gray-300 flex items-center justify-center cursor-pointer hover:bg-white active:bg-white"
              >
                {social.icon}
              </div>
            );
          })}
        </div>
      </div>
      <p className="text-white flex items-center w-max mx-auto font-semibold">
        <MdOutlineCopyright size={20} className="mr-2" />
        FurniStore 2023
      </p>
    </footer>
  );
};
export default Footer;
