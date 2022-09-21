// import Button from "./UI/Button";

function DishCard({ item, setSelectedDish, selectedDish }) {
  function selectDish(id) {
    const newRank = parseInt(id);
    for (const key in selectedDish) {
      if (selectedDish[key].id === item.id) {
        delete selectedDish[key];
        break;
      }
    }
    setSelectedDish((prv) => {
      return { ...prv, [newRank]: { ...item, rank: newRank } };
    });
  }

  return (
    <div>
      <div key={item.id} className="flex  flex-row w-[47rem]  p-4">
        <img
          src={item.image}
          alt={item.dishName}
          className="p-3 pointer-events-none"
        />
        <div className="flex flex-col pt-4">
          <p className="text-center uppercase underline tracking-wider text-2xl  pointer-events-none">
            {item.dishName}
          </p>
          <p className="py-3  px-14">{item.description}</p>
          <div className="flex flex-col pt-5 items-center gap-2">
            {/* <Button
              id={0}
              selectDish={selectDish}
              selectedDish={selectedDish}
              item={item}
            />
            <Button
              id={1}
              selectDish={selectDish}
              selectedDish={selectedDish}
              item={item}
            />
            <Button
              id={2}
              selectDish={selectDish}
              selectedDish={selectedDish}
              item={item}
            /> */}

            <button
              id={0}
              onClick={selectDish}
              className="p-2 border w-2/5 bg-black text-white"
              disabled={
                selectedDish !== null &&
                Object.values(selectedDish)[0].id === item.id &&
                Object.values(selectedDish)[0].rank === 0
              }
            >
              Rank it to 1
            </button>
            <button
              id={1}
              onClick={selectDish}
              className="p-2 border w-2/5 bg-black text-white"
              disabled={
                selectedDish !== null &&
                Object.values(selectedDish)[1].id === item.id &&
                Object.values(selectedDish)[1].rank === 0
              }
            >
              Rank it to 2
            </button>
            <button
              id={2}
              onClick={selectDish}
              className="p-2 border w-2/5 bg-black text-white"
              disabled={
                selectedDish !== null &&
                Object.values(selectedDish)[2].id === item.id &&
                Object.values(selectedDish)[2].rank === 2
              }
            >
              Rank it to 3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishCard;
