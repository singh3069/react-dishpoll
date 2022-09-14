import { useState, useEffect } from "react";

function Dishes() {
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
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
    <div>
      <h1>Dishes</h1>
      {error && (
        <div>
          {`There is a problem fetching the post data because of this - Error ${error}`}
        </div>
      )}
      <div>
        {data &&
          data.map(({ id, dishName, image, description }) => (
            <div key={id}>
              <p>{dishName}</p>
              {/* <img src={image} alt={dishName} /> */}
              <p>{description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dishes;
