import React from "react";
import { LogOut } from "lucide-react"; 

function Navbar() {
  return (
    <div className="fixed top-0 w-full bg-blue-500 text-white flex justify-between items-center px-6 py-4 shadow-md">

      <h1 className="text-lg font-semibold">
        Munaff Dental Patient Record System
      </h1>

      <button className="hover:text-gray-200 cursor-pointer transition">
        <LogOut size={24} />
      </button>
    </div>
  );
}

export default Navbar;
