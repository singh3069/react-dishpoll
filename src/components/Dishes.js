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
              <li>Each selection will be shown in Poll results.</li>
              <li>
                User can change the rank fo selected dish if not satisfied with
                the ranking.
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
