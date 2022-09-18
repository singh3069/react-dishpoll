import React from "react";

function DishCard({ item, setSelected }) {
  function selectDish() {
    setSelected((prv) => {
      if (prv.includes(item)) {
        return prv.filter((el) => el !== item);
      }
      return [...prv, item];
    });
  }

  return (
    <div>
      <div key={item.id} className="flex  flex-col w-60  p-4">
        <p className="text-center uppercase underline tracking-wider text-lg  pointer-events-none">
          {item.dishName}
        </p>
        <img
          src={item.image}
          alt={item.dishName}
          className="p-3 pointer-events-none"
        />
        <p className="pt-1 pointer-events-none">{item.description}</p>
        <button onClick={selectDish}>Select</button>
      </div>
    </div>
  );
}

export default DishCard;
