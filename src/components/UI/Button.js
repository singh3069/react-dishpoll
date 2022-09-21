import React from "react";

function Button({ id, selectDish, selectedDish, item }) {
  const setDisable = (id) => {
    return (
      selectedDish !== null &&
      Object.values(selectedDish).length > id &&
      Object.values(selectedDish)[id].id === item.id &&
      Object.values(selectedDish)[id].rank === id
    );
  };

  return (
    <button
      id={id}
      onClick={selectDish}
      className="p-2 border w-2/5 bg-black text-white"
      // style={{
      //   backgroundColor: setDisable(id) ? "grey" : "black",
      // }}
      disabled={setDisable(id)}
    >
      Rank it to {id + 1}
    </button>
  );
}

export default Button;
