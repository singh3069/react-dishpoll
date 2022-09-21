function Pollresult({ selectedDish }) {
  const pollDish = selectedDish !== null && Object.values(selectedDish);
  return (
    <div>
      {selectedDish !== null && pollDish.length <= 0 && (
        <p className="text-center">You have not selected any dish...!!!</p>
      )}
      <div className="flex flex-row w-full flex-wrap  justify-center">
        {selectedDish !== null &&
          pollDish.length > 0 &&
          pollDish
            .map((el) => {
              return (
                <div key={el.id} className="flex  flex-row w-[47rem]  p-4">
                  <img
                    src={el.image}
                    alt={el.dishName}
                    className="p-3 pointer-events-none"
                  />
                  <div className="flex flex-col pt-4">
                    <p className="text-center uppercase underline tracking-wider text-2xl  pointer-events-none">
                      {el.dishName}
                    </p>
                    <p className="py-3  px-14">{el.description}</p>
                    <div className="text-center">
                      <p>
                        <strong>Rank :</strong> {el.rank + 1}
                      </p>
                      <p>
                        <strong>Points : </strong>
                        {el.rank === 0 ? "30" : el.rank === 1 ? "20" : "10"}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
            .reverse()}
      </div>
    </div>
  );
}

export default Pollresult;
