import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="w-full h-20 border-b-2 mt border-black flex justify-center text-center items-center gap-96">
      <Link to="/dishes">
        <p className="underline cursor-pointer text-2xl tracking-wider">
          Dishes
        </p>
      </Link>
      <p className=" cursor-pointer text-2xl tracking-wider">Dish Poll</p>
      <Link to="/pollresult">
        <p className="underline cursor-pointer text-2xl tracking-wider">
          Pollresult
        </p>
      </Link>
    </div>
  );
}

export default Navigation;
