const Banner = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-10 px-6 lg:flex-row">

        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Build Your Ideal
            <br />

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 md:text-lg">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-4">

            <button
              className="rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-pink-600 px-5 py-3 text-sm font-semibold text-white transition hover:scale-105"
            >
              Explore Technologies
            </button>

            <button
              className="rounded-lg border border-slate-200 bg-white px-7 py-3 text-sm font-medium text-slate-600 transition hover:border-pink-400 hover:text-pink-500"
            >
              Learn More
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <img
            src="/assets/banner-stack.png"
            alt="Development Stack"
            className="w-[280px] object-contain transition duration-500 hover:scale-105 sm:w-[340px] md:w-[400px] lg:w-[460px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;