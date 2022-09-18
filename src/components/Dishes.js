import { useState, useEffect } from "react";
import DishCard from "./DishCard";

function Dishes() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState([]);

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

  // limited the array length to 3
  selected.length = Math.min(selected.length, 3);
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
            <DishCard key={index} item={item} setSelected={setSelected} />
          ))}
      </div>
    </div>
  );
}

export default Dishes;
