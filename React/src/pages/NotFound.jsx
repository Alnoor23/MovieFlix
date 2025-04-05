import React from "react";
import { Link } from "react-router";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-6xl font-bold text-gray-300">404</h1>
      <p className="text-2xl text-gray-600 mb-8">
        Heyy! I haven't coded this page.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;
