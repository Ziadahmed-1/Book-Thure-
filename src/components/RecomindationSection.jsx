import BookCard from "./BookCard";
import { useEffect, useState, useMemo } from "react";
// import { motion, useScroll } from "framer-motion";
// import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBook, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import Loading from "./Loading";

const RecomindationSection = function ({ setCartItems, cartItems }) {
  // const ref = useRef();
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["0 1", "1.1 1"],
  // });

  const [randomBook, setRandomBook] = useState();
  const [err, setErr] = useState(null);

  const genres = [
    "Fiction",
    "Fantasy",
    "Science Fiction",
    "Mystery",
    "Romance",
    "Historical Fiction",
    "Thriller",
    "Horror",
    "History",
    "Biography",
    "And more ...",
  ];
  const url = "https://books-api7.p.rapidapi.com/books/get/random/";
  const options = useMemo(() => {
    return {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2322a1681bmsh10ca76e689ff844p19faa6jsn929ecd5397f8",
        "X-RapidAPI-Host": "books-api7.p.rapidapi.com",
      },
    };
  }, []);

  useEffect(() => {
    try {
      fetch(url, options)
        .then((res) => {
          try {
            if (!res.ok) {
              throw new Error(
                "We're currently experiencing technical difficulties. Please try again later. We apologize for the inconvenience."
              );
            } else {
              return res.json();
            }
          } catch (err) {
            setErr(err.message);
          }
        })
        .then((data) => {
          setRandomBook(data);
        });
    } catch (err) {
      setErr("There is some server issues, please try again later");
    }
  }, [url, options]);
  return (
    <
      // ref={ref}
      // style={{ scale: scrollYProgress, opacity: scrollYProgress }}
    >
      <div className="flex flex-wrap md:flex-nowrap  justify-center items-center gap-10 px-6 md:px-12 lg:px-24 dark:bg-darkCustom ">
        <div className="items-center justify-center text-center md:text-start space-y-6 md:space-y-8 lg:space-y-12 py-10  ">
          <div className="flex justify-around pb-6 md:pb-10 lg:pb-12 lg:gap-20 dark:text-stone-200 ">
            <div className="flex flex-col justify-center items-center dark:text-stone-200">
              <FontAwesomeIcon icon={faUser} className="size-14" />
              <p className="lg:text-2xl font-semibold pt-2 text-sm md:text-lg">
                + 1,200
              </p>
              <p className="text-sm md:text-md lg:text-2xl font-semibold text-center">
                Client monthly
              </p>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <FontAwesomeIcon icon={faBook} className="size-14" />
              <p className="lg:text-2xl font-semibold pt-2 text-sm md:text-lg">
                + 150
              </p>
              <p className="text-sm md:text-md lg:text-2xl font-semibold text-center">
                New book monthly
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FontAwesomeIcon icon={faStopwatch} className="size-14" />
              <p className="lg:text-2xl font-semibold pt-2 text-sm md:text-lg">
                {" "}
                &lt; 48 hours
              </p>
              <p className="text-sm md:text-md lg:text-2xl font-semibold text-center">
                To recieve your order
              </p>
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl uppercase font-semibold text-pretty dark:text-stone-200">
            From thrillers and mysteries to romance and science fiction, we have
            something for every reader.
          </h3>
          <ul className="flex flex-wrap gap-3">
            {genres.map((genre) => (
              <li
                key={genre}
                className="px-4 py-2 bg-stone-200 rounded-full inline-block last-of-type:animate-bounce-slow "
              >
                {genre}
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-1/2 flex flex-col items-center justify-center gap-2 bg-stone-100 rounded-2xl my-6 pb-6  border-4">
          <h3 className=" text-lg md:text-xl lg:text-2xl uppercase font-semibold py-6 px-3 text-lime-950 text-center lg:min-w-[16rem] xl:min-w-[30rem] 2xl:min-w-[38rem] ">
            The book of the day
          </h3>
          {err ? (
            <div className="max-w-2/3 flex flex-col items-center">
              <FontAwesomeIcon
                icon={faCircleExclamation}
                className="size-16 text-slate-800 "
              />
              <h3 className="text-md md:text-xl lg:text-2xl max-w-50 text-balance font-semibold py-6 px-3 text-lime-950 text-center">
                {err}
              </h3>
            </div>
          ) : randomBook ? (
            <BookCard
              setCartItems={setCartItems}
              id={randomBook}
              book={randomBook}
              cartItems={cartItems}
            />
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <hr />
    </>
  );
};

export default RecomindationSection;
