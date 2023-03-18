import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

const SingleProductPage = () => {
  return (
    <section className="w-full md:px-16">
      {/* Product info */}
      <div className="grid md:grid-cols-2">
        {/* img */}
        <div className="w-full  ">
          {/* main img */}
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
            alt=""
            className="object-cover w-full h-60 md:w-[100%] md:h-[300px]"
          />

          {/* sub img */}
          {/* should use map to list these img */}
          <div className="w-full flex justify-left py-2">
            <img
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
              alt=""
              className="w-[30%] h-20 object-cover rounded-lg mr-2 cursor-pointer"
            />
            <img
              src="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
              alt=""
              className="w-[30%] h-20 object-cover rounded-lg cursor-pointer brightness-50 active:brightness-100  ring-amber-500 hover:ring"
            />
          </div>
        </div>
        {/* main info */}
        <div className="md:pl-8">
          <h1 className="text-2xl font-bold">Furniture</h1>
          {/* Description */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            exercitationem doloremque quas quae provident.
          </p>
          {/* Info & Menu selection */}
          {/* should use map */}
          <div className="flex">
            <p className="basis-28">Available:</p>
            <p>In Stock</p>
          </div>
          <div className="flex">
            <p className="basis-28">SKU:</p>
            <p>abc</p>
          </div>
          <div className="flex">
            <p className="basis-28">Brand:</p>
            <p>IKEA</p>
          </div>
          {/* Menu */}

          {/* Select color */}
          <div className="flex items-center">
            <span className="basis-28 font-semibold">Select color:</span>
            <ul className="flex items-center">
              <li>
                <button className="w-4 h-4 rounded-[50%] mr-2 bg-amber-400 ring-amber-500 active:ring-2"></button>
              </li>
              <li>
                <button className="w-4 h-4 rounded-[50%] bg-slate-400 ring-amber-500 active:ring-2"></button>
              </li>
            </ul>
          </div>
          {/* Quantity */}
          <div className="flex items-center text-xl md:text-2xl">
            <span className="text-base basis-28 font-semibold">Quantity:</span>
            <button>
              <FiMinusCircle />
            </button>
            <span className="px-2">2</span>
            <button>
              <FiPlusCircle />
            </button>
          </div>
          {/* Add to Cart */}
          <div className="flex py-8">
            <button className="btn-primary">Add to Cart</button>
          </div>
          {/* Total Amount*/}
          <div
            className="
         flex w-full justify-between py-4 px-2 border-y-2 border-gray-500 bg-gray-100 font-bold"
          >
            Total: <span>200$</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProductPage;
