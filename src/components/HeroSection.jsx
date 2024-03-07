import img from "../assets/girl reading book and she is impressed.png";
const HeroSection = function ({ scrollToSearch }) {
  return (
    <>
      <main className="dark:bg-darkCustom bg-stone-100 flex flex-col pb-5 md:pb-10 lg:pb-12 xl:pb-16 xl:pt-10">
        <div className="flex flex-col md:flex-row gap-5 lg:gap-20 py-4 px-10 md:px-12 lg:px-20 md:pt-20 md:pb-10 items-center justify-center text-balance md:text-pretty">
          <div className="space-y-10 md:pr-2 lg:pr-10 text-center md:text-start">
            <h1 className="text-xl md:text-2xl  lg:text-4xl xl:text-6xl font-extrabold uppercase md:mb-12 mt-6  dark:text-stone-200">
              Crafting{" "}
              <span className="xl:text-6xl  text-xl md:text-2xl  lg:text-4xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.300),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
                exceptional
              </span>
              <br></br>reading experiences
            </h1>
            <p className="text-center md:text-start text-[0.7rem] md:text-[0.9rem] lg:text-[1.4rem] leading-relaxed font-semibold text-slate-900 dark:text-stone-400 md:text-pretty text-balance ">
              Looking for pre-loved treasures and hidden gems? Look no further
              than Book Thur! We offer a charming collection of gently-used
              books across all genres, giving a second life to beloved stories
              and introducing you to unique finds. With competitive prices and a
              commitment to sustainability, shopping at Book Thur is good for
              your wallet and the planet!
            </p>
            <button
              onClick={scrollToSearch}
              className="mx-auto bg-slate-800 dark:bg-stone-300 text-stone-200 dark:text-darkCustom text-lg md:text-xl lg:text-2xl py-2 px-4 rounded-md hover:bg-slate-700 transition-all dark:hover:bg-stone-100 "
            >
              Start Reading
            </button>
          </div>
          <div>
            <img
              src={img}
              alt="girl reading book "
              className="rounded-3xl  md:max-w-sm sm:max-w-sm lg:max-w-lg lg:w-md"
            />
          </div>
        </div>
      </main>

      <hr />
    </>
  );
};

export default HeroSection;
