function Newsletter() {
  return (
    <div className="flex w-full max-w-[1000px] h-[250px] md:h-[300px] justify-end bg-newsletter bg-cover bg-right  mt-20 mx-auto rounded-lg shadow-lg">
      <div className="my-auto mr-5 md:mr-32">
        <h1 className="font-section-header text-center">Get More Discount</h1>
        <form action="/" className="flex flex-col mt-6">
          <label htmlFor="email" className="md:text-lg text-center">
            Join our mailing list
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            className="w-full max-w-[500px] mt-2 px-4 text-base rounded-full outline-none border-b-2 focus:border-amber-400"
          />
          <button
            className="btn-primary mt-4 w-[140px] mx-auto"
            onClick={(e) => e.preventDefault()}
          >
            Subscribe Us
          </button>
        </form>
      </div>
    </div>
  );
}
export default Newsletter;
