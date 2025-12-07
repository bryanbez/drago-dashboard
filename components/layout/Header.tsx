import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-20 px-6 bg-white border-b border-gray-200">
      <div className="flex items-center">
        {/* Mobile menu button placeholder */}
        <button className="p-2 mr-4 text-gray-600 rounded-lg md:hidden hover:bg-gray-100">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="md:hidden font-bold text-xl text-indigo-600">DRAGO</div>
      </div>
      <div className="flex items-center gap-4">
        {/* User Avatar Placeholder */}
        <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">
          U
        </div>
      </div>
    </header>
  );
};

export default Header;
