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

  // const selectDish = (e) => {
  //   const allChild = e.target.children;
  //   const allChildArr = [...allChild];
  //   setSelected(allChildArr);
  // };

  // const abc = selected?.map((i) => {
  //   return i.innerHTML;
  // });
  console.log(selected);
  // console.log(abc);

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
            // <div
            //   key={item.id}
            //   className="flex  flex-col w-60  p-4"
            //   onClick={selectDish}
            // >
            //   <p className="text-center uppercase underline tracking-wider text-lg  pointer-events-none">
            //     {item.dishName}
            //   </p>
            //   {/* <img src={item.image} alt={item.dishName} className="p-3 pointer-events-none" /> */}
            //   <p className="pt-1 pointer-events-none">{item.description}</p>
            // </div>
          ))}
      </div>
    </div>
  );
}

export default Dishes;
