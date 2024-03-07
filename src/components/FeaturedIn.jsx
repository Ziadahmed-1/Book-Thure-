import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import netflex from "../assets/logos/Logos-Readability-Netflix-logo.png";
import google from "../assets/logos/google-logo-editorial-vector-symbol-260nw-2317648589.jpg";
import cambridge from "../assets/logos/737_university_of_cambridge.jpg";
import amzone from "../assets/logos/image-260nw-2308438905.jpg";
import london from "../assets/logos/UoL_logo.png";
import microsoft from "../assets/logos/Microsoft_logo_last.svg.jpg";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

const FeaturedIn = function ({ handleScrollToTop }) {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
  };

  const slideImages = [
    {
      url: netflex,
      caption: "Slide 1",
    },
    {
      url: google,
      caption: "Slide 2",
    },
    {
      url: cambridge,
      caption: "Slide 3",
    },
    {
      url: amzone,
      caption: "Slide 4",
    },
    {
      url: london,
      caption: "Slide 5",
    },
    {
      url: microsoft,
      caption: "Slide 6",
    },
  ];

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.3 1"],
  });

  return (
    <div className="dark:bg-darkCustom hidden md:block ">
      <motion.div
        ref={ref}
        style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      >
        <div className="p-16 space-y-8 spanStyle">
          <h3 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold dark:text-stone-200">
            As Featured In
          </h3>
          <div className="w-3/4 mx-auto">
            <Slide
              canSwipe={false}
              className="rounded-lg"
              slidesToScroll={1}
              slidesToShow={5}
              indicators={false}
            >
              {slideImages.map((slideImage, index) => (
                <div
                  className="my-auto mx-auto items-center justify-center"
                  key={index}
                >
                  <div
                    style={{
                      ...divStyle,
                      backgroundImage: `url(${slideImage.url})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      alignSelf: "center",
                      margin: "0 0 0 3rem",
                    }}
                    className="align-middle h-8 md:h-12 lg:h-24 mx-auto w-full justify-center self-center inline-block"
                  ></div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
        <button
          onClick={handleScrollToTop}
          className=" pt-2 pb-1 px-2 hover:bg-stone-200 bg-stone-300 fixed bottom-3 left-5  rounded-lg"
        >
          <FontAwesomeIcon icon={faCircleUp} className="size-8 " />
        </button>

        <hr />
      </motion.div>
    </div>
  );
};

export default FeaturedIn;
