import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import FeaturedIn from "./components/FeaturedIn";
import HighestRating from "./components/HighestRating";
import RecomindationSection from "./components/RecomindationSection";
import SearchingSection from "./components/SearchingSection";
import CartModal from "./components/CartModal";
import Footer from "./components/Footer";
import { useEffect, useRef, useState } from "react";

const App = function () {
  // const [{ y }] = useWindowScroll();
  const [cartItems, setCartItems] = useState([]);
  const [darkTheme, setDarkTheme] = useState(true);
  function handleThemeToggle() {
    setDarkTheme((prev) => !prev);
  }
  useEffect(() => {
    console.log(darkTheme);
  }, [darkTheme]);
  let dark = darkTheme ? "dark" : "";
  const dialog = useRef(null);

  const scrollRef = useRef(null);
  const footerRef = useRef(null);
  const navRef = useRef(null);

  function scrollToSearch() {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToFooter() {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  function handleScrollToTop() {
    navRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function openModal() {
    dialog.current.showModal();
  }

  function closeModal() {
    dialog.current.close();
  }

  return (
    <div className={dark}>
      <CartModal
        cartItems={cartItems}
        setCartItems={setCartItems}
        dialog={dialog}
        closeModal={closeModal}
      />
      <NavBar
        //handleScrollTo={handleScrollTo}
        cartItems={cartItems}
        openModal={openModal}
        scrollToFooter={scrollToFooter}
        ref={navRef}
        handleThemeToggle={handleThemeToggle}
        darkTheme={darkTheme}
      />
      <HeroSection
        //handleScrollTo={handleScrollTo}
        scrollToSearch={scrollToSearch}
      />
      <FeaturedIn handleScrollToTop={handleScrollToTop} />

      <HighestRating setCartItems={setCartItems} cartItems={cartItems} />
      <RecomindationSection setCartItems={setCartItems} cartItems={cartItems} />
      <SearchingSection
        ref={scrollRef}
        setCartItems={setCartItems}
        cartItems={cartItems}
      />
      <Footer ref={footerRef} />
    </div>
  );
};

export default App;
