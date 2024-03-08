import img from "../assets/_beeb4942-1c86-44e9-adab-757bf0d4c5cc.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faSquareTwitter,
  faSquareReddit,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCommentSms } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { forwardRef } from "react";
const Footer = forwardRef(function Footer(props, ref) {
  return (
    <footer className="bg-[#0E1E2B] flex flex-col sm:flex-row text-pretty  justify-evenly text-stone-300 p-8 gap-6  md:p-10 lg:p-12 xl:p-20 ">
      <div className="md:flex flex-col gap-2 items-center justify-center hidden ">
        <img src={img} alt="Book thur logo" className="size-28" />
        <p className="text-sm lg:text-lg text-center ">
          <FontAwesomeIcon icon={faCopyright} /> 2024 BOOK THUR
        </p>
      </div>
      <div className="flex flex-col gap-2 [&>*:not(h4)]:ml-4 text-sm xl:text-base">
        <h4 className=" py-2 text-md lg:text-xl xl:text-2xl font-extrabold  ">
          Get lost in a world of stories! Explore our bookstores near you
        </h4>

        <a
          href="https://maps.app.goo.gl/1BuhopsjXE3cm81H9"
          rel="noreferrer"
          target="_blank"
          className=" w-fit cursor-pointer hover:text-slate-50"
        >
          <FontAwesomeIcon icon={faLocationDot} className="mr-2" /> 221B Baker
          Street, San Francisco.
        </a>
        <a
          href="https://maps.app.goo.gl/56cHaAF2gXfJEQ7x8"
          rel="noreferrer"
          target="_blank"
          className=" w-fit cursor-pointer hover:text-slate-50 w- "
        >
          {" "}
          <FontAwesomeIcon icon={faLocationDot} className="mr-2 po" />
          602 Elm Street, Springfield, VT 05156.
        </a>
        <a
          href="https://maps.app.goo.gl/V4bcJ3QKTvxZ7grT9"
          rel="noreferrer"
          target="_blank"
          className=" w-fit cursor-pointer hover:text-slate-50"
        >
          {" "}
          <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
          1600 Pennsylvania Avenue NW, Washington, D.C.
        </a>
        <h4 className="py-2 text-md lg:text-xl xl:text-2xl pt-4 pb-2 font-extrabold">
          You can also follow us here
        </h4>
        <div className="flex gap-4 ">
          <a className="cursor-pointer">
            <FontAwesomeIcon
              className="size-8 hover:text-stone-50 transition-all duration-300"
              icon={faSquareFacebook}
            />
          </a>
          <a className="cursor-pointer">
            <FontAwesomeIcon
              className="size-8 hover:text-stone-50 transition-all duration-300"
              icon={faSquareTwitter}
            />
          </a>
          <a className="cursor-pointer">
            <FontAwesomeIcon
              className="size-8 hover:text-stone-50 transition-all duration-300"
              icon={faSquareReddit}
            />
          </a>
          <a className="cursor-pointer">
            <FontAwesomeIcon
              className="size-8 hover:text-stone-50 transition-all duration-300"
              icon={faYoutube}
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col text-sm ">
        <div className="flex flex-col gap-2 [&>*:not(h4)]:ml-4 xl:text-base">
          <h4 className="text-md lg:text-xl xl:text-2xl pt-4 pb-2 font-extrabold">
            Contact us
          </h4>
          <a href="tel:(212) 555-1234" className="hover:text-stone-50">
            <FontAwesomeIcon className="mr-2" icon={faPhone} /> (212) 555-1234
          </a>
          <a href="mailto:bookthur@gmail.com" className="hover:text-stone-50">
            <FontAwesomeIcon className="mr-4" icon={faEnvelope} />
            bookThur@gmail.com
          </a>
          <a ref={ref} href="sms:+2125551234" className="hover:text-stone-50">
            <FontAwesomeIcon className="mr-2" icon={faCommentSms} /> Text us at
            (212) 555-1234
          </a>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
