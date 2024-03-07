import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import img from "../assets/_beeb4942-1c86-44e9-adab-757bf0d4c5cc.jpeg";
import { forwardRef } from "react";

const NavBar = forwardRef(function NavBar(
  { cartItems, scrollToFooter, openModal, handleThemeToggle, darkTheme },
  ref
) {
  return (
    <>
      <nav
        ref={ref}
        className="bg-darkCustom flex justify-between text-stone-100 md:px-10 lg:px-20 px-1 md:pb-2"
      >
        <div className="flex gap-1 items-center">
          <img src={img} alt="" className="size-16 md:size-20 " />
          <span className="text-md md:text-3xl md:font-extrabold ">
            Book Thure
          </span>
        </div>
        <div className="flex items-center">
          <ul className="flex gap-1 md:gap-3 lg:gap-6 items-center justify-center">
            <li className="px-1 py-1 md:px-4 md:py-2 text-sm md:text-2xl hover:bg-[#21415c] rounded-lg transition-all text-center">
              <a className="cursor-pointer" onClick={() => scrollToFooter()}>
                About us
              </a>
            </li>
            <button
              onClick={openModal}
              className="cursor-pointer px-1 py-1 md:px-4 md:py-2 hover:bg-[#21415c] rounded-lg transition-all text-center"
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className="size-4 md:size-6"
              />
              <sub className="lg:text-lg  ">({cartItems?.length})</sub>
            </button>
            {darkTheme ? (
              <li
                onClick={handleThemeToggle}
                className="cursor-pointer px-1 py-1 md:px-4 md:py-2 hover:bg-[#21415c] rounded-lg transition-all text-center"
              >
                <FontAwesomeIcon icon={faSun} className="size-4 md:size-6" />
              </li>
            ) : (
              <li
                onClick={handleThemeToggle}
                className="cursor-pointer px-1 py-1 md:px-4 md:py-2 hover:bg-[#21415c] rounded-lg transition-all text-center"
              >
                <FontAwesomeIcon icon={faMoon} className="size-4 md:size-6" />
              </li>
            )}
          </ul>
        </div>
      </nav>
      <hr />
    </>
  );
});

export default NavBar;
