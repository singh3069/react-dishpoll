import DishCard from "./DishCard";

function Dishes({ setSelectedDish, selectedDish, data, error }) {
  return (
    <div className="pt-4">
      {error && (
        <div>
          {`There is a problem fetching the post data because of this - Error ${error}`}
        </div>
      )}
      <div className="flex flex-row flex-wrap gap-10 justify-center">
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
  );
}

export default Dishes;
