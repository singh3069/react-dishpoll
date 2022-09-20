function Pollresult({ selected }) {
  return (
    <div>
      {selected.length <= 0 && <p>You have not selected any dish...!!!</p>}
      <div className="flex flex-row w-full justify-evenly">
        {selected.length > 0 &&
          selected
            .map((el) => {
              return (
                <div key={el.id} className="flex  flex-col w-60  p-4">
                  <p className="text-center uppercase underline tracking-wider text-lg  pointer-events-none">
                    {el.dishName}
                  </p>
                  <img
                    src={el.image}
                    alt={el.dishName}
                    className="p-3 pointer-events-none"
                  />
                  <p className="pt-1 pointer-events-none">{el.description}</p>
                  <p>Rank : {el.rank + 1}</p>
                  <p>
                    Points :{" "}
                    {el.rank === 0 ? "30" : el.rank === 1 ? "20" : "10"}
                  </p>
                </div>
              );
            })
            .reverse()}
      </div>
    </div>
  );
}

export default Pollresult;
