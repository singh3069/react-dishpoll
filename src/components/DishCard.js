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

  function getRank(rank) {
    return rank === 0 && selectedDish.length > 0 ? (
      <>
        <button>Rank it to 2</button>
        <button>Rank it to 3</button>
      </>
    ) : rank === 1 && selectedDish.length >= 1 ? (
      <>
        <button>Rank it to 1</button>
        <button>Rank it to 3</button>
      </>
    ) : rank === 2 && selectedDish.length >= 2 ? (
      <>
        <button>Rank it to 1</button>
        <button>Rank it to 2</button>
      </>
    ) : !rank && selectedDish.length >= 3 ? (
      <>
        <button>Rank it to 1</button>
        <button>Rank it to 2</button>
        <button>Rank it to 3</button>
      </>
    ) : (
      <button
        onClick={selectDish}
        disabled={selectedDish.length >= 3 ? true : false}
      >
        Select
      </button>
    );
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
        {getRank(item.rank)}
      </div>
    </div>
  );
}

export default DishCard;
