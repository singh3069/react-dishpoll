import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="w-full h-20 border-b-2 mt border-black flex justify-center text-center items-center gap-96">
      <Link to="/">
        <p className="underline cursor-pointer text-2xl tracking-wider">
          Dishes
        </p>
      </Link>
      <Link to="/pollresult">
        <p className="underline cursor-pointer text-2xl tracking-wider">
          Pollresult
        </p>
      </Link>
    </div>
  );
}

export default Navigation;
