import { Link } from "react-router-dom";

export default function Panel({
  wineList,
  setFilteredReds,
  setFilteredWhites,
}) {
  const whites = wineList.filter((wine) => {
    return wine.type === "White";
  });

  const reds = wineList.filter((wine) => {
    return wine.type === "Red";
  });

  setFilteredReds(reds);

  setFilteredWhites(whites);

  const loaded = () => {
    return (
      <>
        <div>
          <h1>
            <Link to={"/wines/whites"}> Whites </Link>
          </h1>
          {whites.map((w, idx) => {
            return <div key={idx}>{w.name}</div>;
          })}
        </div>

        <div>
          <h1>
            <Link to={"/wines/reds"}>Reds</Link>
          </h1>
          {reds.map((r, idx) => {
            return <div key={idx}>{r.name}</div>;
          })}
        </div>
      </>
    );
  };

  const loading = () => <h1>Loading...</h1>;

  return <section className="Panel">{wineList ? loaded() : loading()}</section>;
}
