import React from "react";

function Button({ id, selectDish, selectedDish, item }) {
  return (
    <button
      id={id}
      onClick={() => selectDish(id)}
      className="p-2 border w-2/5 bg-black text-white"
      disabled={
        selectedDish !== null &&
        Object.values(selectedDish)[id].id === item.id &&
        Object.values(selectedDish)[id].rank === id
      }
    >
      Rank it to {id + 1}
    </button>
  );
}

export default Button;
