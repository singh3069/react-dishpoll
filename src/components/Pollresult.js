function Pollresult({ selected }) {
  return (
    <div>
      {selected.map((el) => {
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
          </div>
        );
      })}
    </div>
  );
}

export default Pollresult;
