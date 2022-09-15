import React from "react";

function Navigation() {
  return (
    <div className="w-full h-20 border-b-2 mt border-black flex justify-center text-center items-center gap-96">
      <p className="underline cursor-pointer text-2xl tracking-wider">Dishes</p>
      <p className="underline cursor-pointer text-2xl tracking-wider">
        Reviewed Dishes
      </p>
    </div>
  );
}

export default Navigation;
