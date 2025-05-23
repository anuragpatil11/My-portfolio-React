import React, { useContext } from "react";
import { motion } from "framer-motion";
import { DarkModeContext } from "../context/DarkModeContext";

const Switch = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className="relative">
      <label className="relative inline-block w-16 h-9">
        {/* Labels removed from sides and added to the thumb */}
        <input
          type="checkbox"
          className="opacity-0 w-0 h-0"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        />
        <span 
          className={`absolute cursor-pointer inset-0 rounded-full transition-colors duration-300 ease-in-out ${darkMode ? "bg-slate-700" : "bg-blue-100"}`}
        >
          <motion.div
            layout
            transition={{ type: "spring", damping: 15, stiffness: 250 }}
            className="absolute flex items-center justify-center h-7 w-7 bg-white rounded-full top-1 left-1"
            animate={{
              translateX: darkMode ? "1.75rem" : "0rem",
            }}
          >
            {/* Sun icon inside the thumb */}
            {!darkMode && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <g fill="#ffd43b">
                  <circle r={3} cy={12} cx={12} />
                  <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z" />
                </g>
              </svg>
            )}
            
            {/* Moon icon inside the thumb */}
            {darkMode && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-4 h-4"
              >
                <path 
                  fill="#475569" 
                  d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" 
                />
              </svg>
            )}
          </motion.div>
        </span>
      </label>
    </div>
  );
};

export default Switch;