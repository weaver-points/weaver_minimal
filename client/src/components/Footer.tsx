import React from "react";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-700 w-full h-12 absolute bottom-0 left-0 flex justify-center items-center">
      <p className="flex items-center justify-center gap-3">
        <FaRegCopyright /> 2024 Weaver. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
