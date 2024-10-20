import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "../assets/assets";
const Footer = () => {
  return (
    <footer className="flex flex-col sticky bottom-0 items-start gap-2 px-6 pb-6 md:gap-6 bg-customG">
      <div className="flex flex-col items-center self-stretch gap-3 md:flex-row">
        <div className="flex flex-col md:flex-row items-start gap-2 md:gap-6 flex-[1_0_0]">
          <div className="text-[12px] text-center md:text-left w-full md:w-fit font-semibold leading-[140%] text-customGray">
            Copyright © 2024 Lodgify
          </div>
          <div className="flex gap-2 md:gap-6">
            <div className="text-lightGray text-[12px] font-normal leading-[140%]">
              Privacy Policy
            </div>
            <div className="text-lightGray text-[12px] font-normal leading-[140%]">
              Term and conditions
            </div>
            <div className="text-lightGray text-[12px] font-normal leading-[140%]">
              Contact
            </div>
          </div>
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
