import { useState, useEffect } from "react";
import DishCard from "./DishCard";

function Dishes({ setSelected, selected }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Error: The status is ${response.status}, this in an HTTP error.`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      });
  }, []);

  return (
    <div className="pt-4">
      {error && (
        <div>
          {`There is a problem fetching the post data because of this - Error ${error}`}
        </div>
      )}
      <div className="flex flex-row flex-wrap gap-10 justify-center">
        {data &&
          data.map((item, index) => (
            <DishCard
              key={index}
              item={item}
              setSelected={setSelected}
              selected={selected}
            />
          ))}
      </div>
    </div>
  );
}

export default Dishes;
