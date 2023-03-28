import { Link } from 'react-router-dom';

const Brand = () => {
  return (
    <Link
      className="text-4xl lg:text-5xl font-extrabold font-italianno shrink-0 [text-shadow:2px_2px_rgba(0,0,0,0.05)]"
      to="/"
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-600 to-yellow-300 pr-2 ">
        Furni
      </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-bl from-slate-900 to-slate-500 pr-2">
        Store
      </span>
    </Link>
  );
};
export default Brand;
