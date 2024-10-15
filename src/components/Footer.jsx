import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "../assets/assets";
const Footer = () => {
  return (
    <footer className="flex px-6 pb-6 flex-col items-start gap-6 sticky bottom-0  bg-customG">
      <div className="flex items-center gap-3 self-stretch">
        <div className="flex items-start gap-6 flex-[1_0_0]">
          <span className="text-[12px] font-semibold leading-[140%] text-customGray ">
            Copyright © 2024 Lodgify
          </span>
          <span className="text-lightGray text-[12px] font-normal leading-[140%]">
            Privacy Policy
          </span>
          <span className="text-lightGray text-[12px] font-normal leading-[140%]">
            Term and conditions
          </span>
          <span className="text-lightGray text-[12px] font-normal leading-[140%]">
            Contact
          </span>
        </div>
        <div className="flex items-start gap-3">
          <Facebook />
          <Twitter />
          <Instagram />
          <Youtube />
          <Linkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
