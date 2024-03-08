import { useEffect, useState, useRef, useMemo } from "react";
import BookCard from "./BookCard";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { forwardRef } from "react";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const SearchingSection = forwardRef(function SearchingSection(props, ref) {
  const [sorted, setSorted] = useState(false);
  const [err, setErr] = useState(null);
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [curPage, setCurPage] = useState(0);
  const search = useRef();
  const BOOK_URL = "https://books-api7.p.rapidapi.com/books/find/title?title=";
  const AUTHOR_URL = "https://books-api7.p.rapidapi.com/books/find/author?";
  let view = result ? result.slice(curPage * 4, curPage * 4 + 4) : [];
  const loading = (
    <div className="flex flex-col gap-8 items-center justify-center text-center text-balance">
      <p className="text-xl xl:text-3xl">please wait a second...</p>
      <Loading />
    </div>
  );
  const options = useMemo(() => {
    return {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2322a1681bmsh10ca76e689ff844p19faa6jsn929ecd5397f8",
        "X-RapidAPI-Host": "books-api7.p.rapidapi.com",
      },
    };
  }, []);
  let maxPages = Math.ceil(result?.length / 4);

  useEffect(() => {
    try {
      fetch("https://books-api7.p.rapidapi.com/books?p=1", options)
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
            setErr(err);
          }
        })
        .then((data) => {
          setResult(data);
        });
    } catch (err) {
      setErr("sdffsadf");
    }
  }, [options]);

  function onSearch() {
    if (search.current.value) {
      setIsLoading(true);
      setResult([]);
      setErr(null);

      const book = search.current.value
        .split(" ")
        .map((str) =>
          str
            .split("")
            // .filter((char) => /^[a-zA-Z0-9]+$/.test(char))
            .filter(
              (char) => !["*", "&", "^", "%", "$", "#", "@", "!"].includes(char)
            )
            .join("")
        )
        .join("%20");

      const [fname, lname] = search.current.value
        .split(" ")
        .filter((char) => /^[a-zA-Z0-9]+$/.test(char));

      try {
        fetch(`${BOOK_URL}${book}`, options)
          .then((res) => {
            if (!res.ok) {
              throw new Error(
                "We're currently experiencing technical difficulties. Please try again later. We apologize for the inconvenience."
              );
            } else {
              return res.json();
            }
          })
          .then((data) =>
            setResult((prev) => {
              if (data) {
                data = data.filter(
                  (book) =>
                    !prev.some((prevBook) => prevBook.book_id === book.book_id)
                );
              }
              return [...prev, ...data];
            })
          );
        let author;
        let author2;
        if (lname) {
          author = `${AUTHOR_URL}lname=${lname}&fname=${fname}`;
        } else {
          author = `${AUTHOR_URL}fname=${fname}`;
          author2 = `${AUTHOR_URL}lname=${fname}`;
        }
        fetch(author, options)
          .then((res) => {
            if (!res.ok) {
              throw new Error(
                "We're currently experiencing technical difficulties. Please try again later. We apologize for the inconvenience."
              );
            } else {
              return res.json();
            }
          })
          .then((data) =>
            setResult((prev) => {
              if (data) {
                data = data.filter(
                  (book) =>
                    !prev.some((prevBook) => prevBook.book_id === book.book_id)
                );
              }
              return [...prev, ...data];
            })
          );

        fetch(author2, options)
          .then((res) => {
            if (!res.ok) {
              throw new Error(
                "We're currently experiencing technical difficulties. Please try again later. We apologize for the inconvenience."
              );
            } else {
              return res.json();
            }
          })
          .then((data) =>
            setResult((prev) => {
              if (data) {
                data = data.filter(
                  (book) =>
                    !prev.some((prevBook) => prevBook.book_id === book.book_id)
                );
              }
              return [...prev, ...data];
            })
          );
      } catch (err) {
        setErr(err.message);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, [1000]);
      }
    }
  }

  function handleLTH() {
    setResult((prev) => prev.sort((a, b) => a.pages - b.pages));
    setCurPage(0);
    view = result.slice(curPage * 4, curPage * 4 + 4);
    setSorted((prev) => !prev);
  }
  function handleHTL() {
    setResult((prev) => prev.sort((a, b) => b.pages - a.pages));
    setCurPage(0);
    view = result.slice(curPage * 4, curPage * 4 + 4);
    setSorted((prev) => !prev);
  }

  function handleRateLTH() {
    let sorted = result.sort((a, b) => a.rating - b.rating);
    setResult(() => sorted);
    setCurPage(0);
    view = result.slice(curPage * 4, curPage * 4 + 4);
    setSorted((prev) => !prev);
  }
  function handleRateHTL() {
    let sorted = result.sort((a, b) => b.rating - a.rating);
    setResult(() => sorted);
    setCurPage(0);
    view = result.slice(curPage * 4, curPage * 4 + 4);
    setSorted((prev) => !prev);
  }

  function handlePrev() {
    if (curPage >= 1) {
      setCurPage((prev) => prev - 1);
    }
  }

  function handleNext() {
    if (curPage < maxPages - 1) {
      setCurPage((prev) => prev + 1);
    }
  }

  return (
    <>
      <div
        ref={ref}
        id="search-section"
        className="items-center bg-stone-100 pb-16 pt-20 px-4 md:px-10 lg:px-20 flex flex-col xl:flex-row justify-between gap-10 dark:bg-darkCustom"
      >
        <div>
          <div className="space-x-2 flex flex-col gap-5 items-center">
            <input
              ref={search}
              type="search"
              placeholder="Book or author name"
              className="py-3 px-2 md:px-5 text-xl rounded-lg border shadow-xl md:w-80  caret-slate-600 focus:outline-none focus:ring-slate-900 focus:border-slate-900 dark:hover:outline-2 focus:shadow-outline"
            />
            <button
              onClick={onSearch}
              className="bg-[#0E1E2B] text-stone-200 rounded-lg py-2 px-4 text-xl hover:bg-[#1a3347] w-1/2 max-w-60 dark:bg-stone-300 dark:text-darkCustom dark:hover:bg-stone-100"
            >
              Search
            </button>
          </div>
          <div>
            <h4 className="lg:text-xl pt-5 pb-2 dark:text-stone-200 dark:font-semibold">
              Sorting by number of pages
            </h4>
            <div className="flex items-center mb-1 ">
              <input
                onClick={handleLTH}
                id="lower-to-higher"
                type="radio"
                name="sort-per-page"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                onClick={handleLTH}
                htmlFor="lower-to-higher"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Lower to higher
              </label>
            </div>
            <div className="flex items-center">
              <input
                onClick={handleHTL}
                id="higher-to-lower"
                type="radio"
                value={false}
                name="sort-per-page"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                onClick={handleHTL}
                htmlFor="higher-to-lower"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Higher to lower
              </label>
            </div>
          </div>
          <div>
            <h4 className="lg:text-xl pt-5 pb-2 dark:text-stone-200 dark:font-semibold">
              Sorting by book rating
            </h4>
            <div className="flex items-center mb-1 ">
              <input
                onClick={handleRateLTH}
                id="rateLTH"
                type="radio"
                name="sort-per-rate"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                onClick={handleRateLTH}
                htmlFor="rateLTH"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Lower to higher
              </label>
            </div>
            <div className="flex items-center">
              <input
                onClick={handleRateHTL}
                id="rateHTL"
                type="radio"
                value={false}
                name="sort-per-rate"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                onClick={handleRateHTL}
                htmlFor="rateHTL"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Higher to lower
              </label>
            </div>
          </div>
        </div>
        <div className="mx-5 w-full lg:w-2/3 rounded-lg bg-stone-200 shadow-xl  justify-center gap-5 flex items-center flex-wrap pt-10 pb-12 max-w-1/4 relative">
          {err && result?.length !== 0 ? (
            <div className="max-w-2/3 flex flex-col items-center">
              <FontAwesomeIcon
                icon={faCircleExclamation}
                className="size-16 text-slate-800 "
              />
              <h3 className="text-md md:text-xl lg:text-2xl max-w-50 text-balance font-semibold py-6 px-3 text-lime-950 text-center">
                {err.message}
              </h3>
            </div>
          ) : isLoading ? (
            loading
          ) : view.length > 0 ? (
            view.map((book) => (
              <BookCard
                setCartItems={props.setCartItems}
                cartItems={props.cartItems}
                key={book.book_id}
                book={book}
              />
            ))
          ) : (
            <div className="flex flex-col gap-2 items-center justify-center text-center text-balance">
              <FontAwesomeIcon
                icon={faCircleExclamation}
                className="size-16 text-slate-800 "
              />
              <p className="text-xl">
                Please try again with more accurate name
              </p>
              <p className="text-sm lg:text-base ">
                (Enter a full book name, uthor first name or author last name)
              </p>
            </div>
          )}
          {view.length > 0 && !isLoading && (
            <div className="flex justify-center items-center gap-3 absolute bottom-2 text-xl">
              <div
                onClick={handlePrev}
                className="cursor-pointer hover:text-stone-400 transition-all duration-200"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
                <span className="mx-2">prev</span>
              </div>
              <span>
                {curPage + 1} / {maxPages}
              </span>
              <div
                onClick={handleNext}
                className="cursor-pointer hover:text-stone-400 transition-all duration-200"
              >
                <span className="mx-2">next</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
          )}
        </div>
      </div>
      <hr />
    </>
  );
});

export default SearchingSection;
