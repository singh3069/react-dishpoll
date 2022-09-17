import { useState, useEffect } from "react";

function Dishes() {
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

  const selectDish = (e) => {
    console.log(e.target);
  };

  return (
    <div className="pt-4">
      {error && (
        <div>
          {`There is a problem fetching the post data because of this - Error ${error}`}
        </div>
      )}
      <div className="flex flex-row flex-wrap gap-10 justify-center">
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className="flex  flex-col w-60"
              onClick={selectDish}
            >
              <p className="text-center uppercase underline tracking-wider text-lg ">
                {item.dishName}
              </p>
              {/* <img src={item.image} alt={item.dishName} className="p-3 " /> */}
              <p className="pt-1 ">{item.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dishes;
