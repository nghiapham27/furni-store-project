import { Link } from 'react-router-dom';

const ProductCardList = ({ singleProductData }) => {
  const { id, image, name, company, category, shipping, price, description } =
    singleProductData;

  return (
    <div className="w-full shadow-xl rounded-2xl mx-auto overflow-hidden hover:border-amber-300 border-4 border-transparent hover:-translate-y-1 transition-all duration-500">
      <Link
        to={id}
        className="bg-slate-100 overflow-hidden grid grid-cols-[150px_1fr]"
      >
        {/* image */}
        <img
          src={image}
          alt={name}
          className="w-[150px] h-[150px] rounded-t-xl object-cover"
        />

        <div className="px-4 py-3">
          <div className="flex flex-wrap w-full items-start ">
            {/* title & price */}
            <p className="text-left bg-slate-100 pr-4">
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

            {/* tags */}
            <p className="flex justify-center bg-slate-100">
              <span className="tag-blue rounded-full px-2">
                {company.toUpperCase()}
              </span>
              <span className="tag-amber rounded-full px-2 mx-1 ">
                {category}
              </span>

              {shipping && (
                <span className="tag-red rounded-full px-2">free ship</span>
              )}
            </p>
          </div>
          {/* description */}
          <div className="w-[90%] max-h-[80px] line-clamp-3 text-justify">
            {description}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ProductCardList;
