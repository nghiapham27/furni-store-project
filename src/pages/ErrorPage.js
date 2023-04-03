import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="w-screen h-screen">
      <div className="container flex flex-col items-center pt-32 text-center">
        <h1 className="uppercase text-2xl md:text-3xl font-bold text-red-500">
          Error
        </h1>
        <p className="uppercase text-xl md:text-2xl w-full pt-4">
          Sorry, the page you tried cannot be found!
        </p>
        <Link to={'/'} className="btn-nav bg-gray-300 mt-10 w-40">
          Back to Home
        </Link>
      </div>
    </section>
  );
};
export default ErrorPage;
