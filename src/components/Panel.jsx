import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Panel({
  wineList,
  setFilteredReds,
  setFilteredWhites,
  setMainDisplay,
}) {
  const navigate = useNavigate();

  const whites = wineList.filter((wine) => {
    return wine.type === "White";
  });

  const reds = wineList.filter((wine) => {
    return wine.type === "Red";
  });

  setFilteredReds(reds);

  setFilteredWhites(whites);

  const handleClickRed = () => {
    setMainDisplay("Red");
    navigate("/");
  };

  const loaded = () => {
    return (
      <>
        {/* <div>
          <h1><Link to={"/wines"}> Whites </Link></h1>
          {whites.map((w, idx) => {
            return <div key={idx}>{w.name}</div>;
          })}
        </div> */}

        <div>
          <h1>
            <button onClick={handleClickRed}>Reds</button>
            {/* <Link to={"/"}>Reds</Link> */}
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
