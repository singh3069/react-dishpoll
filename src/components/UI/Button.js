import React from "react";

function Button({ id, selectDish, selectedDish, item }) {
  return (
    <button
      id={id}
      onClick={selectDish}
      className="p-2 border w-2/5 bg-black text-white"
      // style={{
      //   backgroundColor:
      //     selectedDish !== null &&
      //     Object.values(selectedDish).length > 0 &&
      //     Object.values(selectedDish)[0].id === item.id &&
      //     Object.values(selectedDish)[0].rank === 0
      //       ? "grey"
      //       : "black",
      // }}
      disabled={
        selectedDish !== null &&
        Object.values(selectedDish).length > id &&
        Object.values(selectedDish)[id].id === item.id &&
        Object.values(selectedDish)[id].rank === id
      }
    >
      Rank it to {id + 1}
    </button>
  );
}

export default Button;
