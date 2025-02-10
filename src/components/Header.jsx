// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <nav className="flex justify-between p-8 bg-white text-black dark:bg-[#1D1616] dark:text-white shadow-lg">
//       {/* Logo/Welcome Text */}
//       <h1 className="text-2xl font-bold tracking-wide hover:text-violet-400 transition-colors duration-300">
//         Portfolio
//       </h1>

//       {/* Navigation Links */}
//       <div className="flex space-x-6 text-lg font-medium">
//         <Link
//           to="/"
//           className="relative text-gray-300 hover:text-violet-400 after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full"
//         >
//           Home
//         </Link>
//         <Link
//           to="/about"
//           className="relative text-gray-300 hover:text-violet-400 after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full"
//         >
//           About
//         </Link>
//         <Link
//           to="/resume"
//           className="relative text-gray-300 hover:text-violet-400 after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full"
//         >
//           Resume
//         </Link>
//         <Link
//           to="/projects"
//           className="relative text-gray-300 hover:text-violet-400 after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full"
//         >
//           Projects
//         </Link>
//         <Link
//           to="/contact"
//           className="relative text-gray-300 hover:text-violet-400 after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full"
//         >
//           Contact
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between p-4 md:p-8 bg-white text-black dark:bg-[#1D1616] dark:text-white shadow-lg">
      {/* Logo/Welcome Text and Hamburger Menu */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide hover:text-violet-400 transition-colors duration-300">
          Portfolio
        </h1>
        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-lg font-medium mt-4 md:mt-0`}
      >
        <Link
          to="/"
          className="relative text-gray-300 hover:text-violet-400 after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="relative text-gray-300 hover:text-violet-400 after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          About
        </Link>
        <Link
          to="/resume"
          className="relative text-gray-300 hover:text-violet-400 after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Resume
        </Link>
        <Link
          to="/projects"
          className="relative text-gray-300 hover:text-violet-400 after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="relative text-gray-300 hover:text-violet-400 after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;