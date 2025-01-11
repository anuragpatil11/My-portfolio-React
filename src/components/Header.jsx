import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between p-8 bg-white text-black dark:bg-[#1D1616] dark:text-white shadow-lg">
      {/* Logo/Welcome Text */}
      <h1 className="text-2xl font-bold tracking-wide hover:text-violet-400 transition-colors duration-300">
        Portfolio
      </h1>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-lg font-medium">
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
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import { NavLink } from "react-router-dom";

// <NavLink
//   to="/"
//   className={({ isActive }) =>
//     `relative hover:text-violet-400 after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full ${
//       isActive
//         ? "text-violet-400 after:w-full"
//         : "text-gray-700 dark:text-gray-300"
//     }`
//   }
// >
//   Home
// </NavLink>;

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="flex items-center justify-between p-8 bg-white text-black dark:bg-[#1D1616] dark:text-white shadow-lg">
//       <h1 className="text-2xl font-bold tracking-wide hover:text-violet-400 transition-colors duration-300">
//         Portfolio
//       </h1>

//       {/* Hamburger Menu */}
//       <div className="block md:hidden">
//         <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
//           {menuOpen ? "Close" : "Menu"}
//         </button>
//       </div>

//       {/* Navigation Links */}
//       <div
//         className={`${
//           menuOpen ? "block" : "hidden"
//         } md:flex space-x-6 text-lg font-medium`}
//       >
//         <Link
//           to="/"
//           className="hover:text-violet-400 after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-violet-400 after:transition-all after:duration-300 hover:after:w-full"
//         >
//           Home
//         </Link>
//         <Link
//           to="/about"
//           aria-label="About page"
//           className="hover:text-violet-400"
//         >
//           About
//         </Link>
//         <Link to="/resume" className="hover:text-violet-400">
//           Resume
//         </Link>
//         <Link to="/projects" className="hover:text-violet-400">
//           Projects
//         </Link>
//         <Link to="/contact" className="hover:text-violet-400">
//           Contact
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Header;
