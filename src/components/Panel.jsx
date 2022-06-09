export default function Panel({ wineList, setWine }) {
  const handleClick = (ele) => {
    setWine(ele);
    console.log("Clicked" + ele);
  };

  const loaded = () => {
    const whites = wineList.filter((wine) => {
      return wine.type === "White";
    });
    const reds = wineList.filter((wine) => {
      return wine.type === "Red";
    });
    return (
      <>
        <div>
          <h1>White</h1>
          {whites.map((w, idx) => {
            return (
              <div key={idx} onClick={() => handleClick(w)}>
                {w.name}
              </div>
            );
          })}
        </div>
        <div>
          <h1>Reds</h1>
          {reds.map((r, idx) => {
            return (
              <div key={idx} onClick={() => handleClick(r)}>
                {r.name}
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="Panel">{wineList ? loaded() : <h1>Loading...</h1>}</div>
  );
}
