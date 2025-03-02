import React from "react";
import { User, Lock } from "lucide-react"; // Import icons

function Login() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img-6.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark Overlay */}

      {/* Form Container */}
      <div className="relative bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Patient Record Management System
        </h1>

        <form className="space-y-5">
          {/* Username Input */}
          <div className="relative">
            <User className="absolute left-4 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <Lock className="absolute left-4 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 cursor-pointer transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
