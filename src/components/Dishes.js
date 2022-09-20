import DishCard from "./DishCard";

function Dishes({ setSelectedDish, selectedDish, data, error }) {
  return (
    <div className="pt-4">
      {error && (
        <div>
          {`There is a problem fetching the post data because of this - Error ${error}`}
        </div>
      )}
      <div className="flex flex-col w-full  justify-center">
        <div className="text-center">
          <div className="flex flex-col">
            <strong>Polling rules</strong>
            <ol className="list-decimal list-inside">
              <li>User can select upto 3 dishes.</li>
              <li>
                {" "}
                At first Each dish is ranked on the bases of selection.
                <ul className="list-disc list-inside">
                  <li>First selected dish will get Rank 1 and 30 points, </li>
                  <li>Second selected dish will get Rank 2 and 20 points,</li>
                  <li>Third selected dish will get Rank 3 and 10 points</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
        <div className="flex flex-row w-full flex-wrap  justify-center">
          {data.length > 0 &&
            data.map((item, index) => (
              <DishCard
                key={index}
                item={item}
                setSelectedDish={setSelectedDish}
                selectedDish={selectedDish}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Dishes;
