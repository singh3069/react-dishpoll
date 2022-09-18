import { useState } from "react";

function DishCard({ item, setSelectedDish, selectedDish }) {
  function selectDish() {
    // const rankArr = [1,2,3]
    item["rank"] = selectedDish?.length;
    setSelectedDish((prv) => {
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
        {selectedDish.length < 3 && (
          <button
            onClick={selectDish}
            disabled={selectedDish.length >= 3 ? true : false}
          >
            Select
          </button>
        )}
        {/* {selectedDish.indexOf(rank1) === selectedDish[0] && (
          <>
            <button>Change it to 2</button>
            <button>Change it to 3</button>
          </>
        )} */}
        {selectedDish.length >= 3 && (
          <>
            <button>Change it to 1</button>
            <button>Change it to 2</button>
            <button>Change it to 3</button>
          </>
        )}
      </div>
    </div>
  );
}

export default DishCard;
