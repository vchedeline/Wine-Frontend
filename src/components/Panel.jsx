import { Link } from "react-router-dom";

export default function Panel({ wineList, setWine, setFilteredList }) {
  const handleClick = (ele) => {
    setWine(ele);
    console.log("Clicked" + ele);
    setFilteredList(null);
  };

  const handleFilter = (list) => {
    setFilteredList(list);
    setWine(null);
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
        <Link to="/wine">
          <h1>Add New Wine</h1>
        </Link>
        <div>
          <h1 onClick={() => handleFilter(whites)}>White</h1>
          {whites.map((w, idx) => {
            return (
              <div key={idx} onClick={() => handleClick(w)}>
                {w.name}
              </div>
            );
          })}
        </div>
        <div>
          <h1 onClick={() => handleFilter(reds)}>Reds</h1>
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
