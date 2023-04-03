import { Link } from 'react-router-dom';

const ProductCardGrid = ({ singleProductData }) => {
  const { id, image, name, company, category, shipping, price } =
    singleProductData;

  // Card of Grid layout
  return (
    <div className="w-full shadow-xl rounded-2xl mx-auto hover:border-amber-300 border-4 border-transparent hover:-translate-y-1 transition-all duration-500 overflow-hidden">
      <Link to={`/products/${id}`}>
        {/* image */}
        <img
          src={image}
          alt={name}
          className="w-full h-[200px] md:h-[300px] rounded-t-xl object-cover"
        />

        {/* tags */}
        <p className="flex flex-wrap justify-center bg-slate-100 pt-2 w-full">
          <span className="tag-blue rounded-full px-1 mt-1">
            {company.toUpperCase()}
          </span>
          <span className="tag-amber rounded-full px-1 mx-1 mt-1">
            {category}
          </span>

          {shipping && (
            <span className="tag-red rounded-full px-1 mt-1">freeship</span>
          )}
        </p>

        {/* title & price */}
        <p className="text-center bg-slate-100 py-2">
          <span className="capitalize font-bold text-xl">{name}</span>
          <br />
          <span className="text-slate-500 font-semibold">{` ${(+price).toLocaleString(
            'en-US',
            {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 2,
            }
          )}`}</span>
        </p>
      </Link>
    </div>
  );
};
export default ProductCardGrid;
