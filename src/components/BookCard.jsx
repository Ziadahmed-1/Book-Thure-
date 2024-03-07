import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFeather,
  faStar,
  faBookOpen,
  faCartPlus,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const BookCard = function ({ book, setCartItems, cartItems }) {
  const genres = book.genres;
  const id = book.book_id;
  const [added, setAdded] = useState(
    cartItems?.some((oldBook) => oldBook.book_id === id)
  );

  useEffect(() => {
    console.log(
      `${book.title} rendered and is in the cart : ${cartItems?.some(
        (oldBook) => oldBook.book_id === id
      )}`
    );
    if (cartItems?.some((oldBook) => oldBook.book_id === id)) {
      setAdded(true);
    } else {
      setAdded(false);
    }
  }, [cartItems, book]);

  function handleAddBook() {
    setCartItems((prev) => {
      let updated = [...prev];
      if (!prev.some((anyBook) => anyBook.book_id === book.book_id)) {
        updated = [...prev, book];
        setAdded(true);
      }
      return updated;
    });
  }

  return (
    <div
      key={added}
      className="rounded-lg bg-yellow-50 w-64 h-[36rem] shadow-sm overflow-hidden  "
    >
      <div className="group w-100 h-[60%] rounded-t-lg overflow-hidden relative   ">
        <img
          className="size-full group-hover:scale-110 
           transition-all duration-500"
          alt={`Cover of ${book.title} book`}
          src={book.cover}
        />
        <div className="flex gap-4 absolute bottom-40 left-16 invisible opacity-80 group-hover:visible transition-all duration-200 ">
          <a href={book.url} rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faInfo}
              className="bg-stone-100 rounded-full text-2xl py-5 px-7 hover:bg-white hover:opacity-100   "
            />
          </a>

          {!added ? (
            <FontAwesomeIcon
              onClick={handleAddBook}
              icon={faCartPlus}
              className="bg-stone-100 rounded-full text-2xl py-5 px-5 hover:cursor-pointer hover:bg-white  hover:opacity-100"
            />
          ) : (
            <FontAwesomeIcon
              className="bg-stone-100 rounded-full text-2xl py-5 px-5 text-lime-700 hover:cursor-default  hover:opacity-100"
              icon={faCheck}
            />
          )}
        </div>
      </div>

      <h4 className="text-center text-lg font-semibold py-2 mx-1 text-balance">
        {book.title}
      </h4>
      <p className="pl-2">
        <FontAwesomeIcon icon={faBookOpen} /> : {book.pages} Pages
      </p>
      <p className="pl-2">
        <FontAwesomeIcon icon={faFeather} /> : {book.author.first_name}{" "}
        {book.author.last_name}
      </p>
      <p className="pl-2">
        <FontAwesomeIcon icon={faStar} /> : {book.rating} / 5{" "}
      </p>
      <ul className="felx flex-wrap space-x-2 py-2 mx-1 w-fit inline-block items-center justify-center">
        {genres.map((genre) => (
          <li
            key={genre}
            className="bg-stone-300 text-xs rounded-full text-center w-fit inline-block px-1 ml-2"
          >
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookCard;
