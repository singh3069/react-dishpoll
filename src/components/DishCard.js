function DishCard({ item, setSelectedDish, selectedDish }) {
  function selectDish() {
    // const rankArr = [1,2,3]
    item["rank"] = selectedDish?.length;
    setSelectedDish((prv) => {
      if (prv.includes(item)) {
        return prv.filter((el) => el.id !== item.id);
      }
      return [...prv, item];
    });
  }

  function changeRank(e) {
    const newRank = parseInt(e.target.id);
    if (newRank !== -1) {
      setSelectedDish((prv) => {
        let newArr = [...selectedDish];
        newArr[newRank] = { ...item, rank: newRank };
      });
      // selectedDish[newRank] = { ...item, rank: newRank };
    }
    changeButtons(item.rank);
  }

  function changeButtons(rank) {
    return rank === 0 && selectedDish.length > 0 ? (
      <>
        <button
          id={1}
          onClick={changeRank}
          className="p-2 border w-2/5 bg-black text-white"
        >
          Rank it to 2
        </button>
        <button
          id={2}
          onClick={changeRank}
          className="p-2 border w-2/5 bg-black text-white"
        >
          Rank it to 3
        </button>
      </>
    ) : rank === 1 && selectedDish.length >= 1 ? (
      <>
        <button
          id={0}
          onClick={changeRank}
          className="p-2 border w-2/5 bg-black text-white"
        >
          Rank it to 1
        </button>
        <button
          id={2}
          onClick={changeRank}
          className="p-2 border w-2/5 bg-black text-white"
        >
          Rank it to 3
        </button>
      </>
    ) : rank === 2 && selectedDish.length >= 2 ? (
      <>
        <button
          id={0}
          onClick={changeRank}
          className="p-2 border w-2/5 bg-black text-white"
        >
          Rank it to 1
        </button>
        <button
          id={1}
          onClick={changeRank}
          className="p-2 border w-2/5 bg-black text-white"
        >
          Rank it to 2
        </button>
      </>
    ) : !rank && selectedDish.length >= 3 ? (
      <>
        <button
          id={0}
          onClick={changeRank}
          className="p-2 border w-2/5 bg-black text-white"
        >
          Rank it to 1
        </button>
        <button
          id={1}
          onClick={changeRank}
          className="p-2 border w-2/5 bg-black text-white"
        >
          Rank it to 2
        </button>
        <button
          id={2}
          onClick={changeRank}
          className="p-2 border w-2/5 bg-black text-white"
        >
          Rank it to 3
        </button>
      </>
    ) : (
      <button
        onClick={selectDish}
        disabled={selectedDish.length >= 3 ? true : false}
        className="p-2 border w-2/5 bg-black text-white"
      >
        Select
      </button>
    );
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
            {changeButtons(item.rank)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishCard;
