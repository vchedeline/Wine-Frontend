import Panel from "./Panel";

export default function MainDisplay({
  wineList,
  setFilteredReds,
  setFilteredWhites,
  filteredWhites,
  filteredReds,
  mainDisplay,
  setMainDisplay,
}) {
  const loaded = () => {
    if (mainDisplay === "Red") {
      return filteredReds.map((wine, index) => {
        return (
          <div key={index}>
            {wine.name}
            {wine.type}
            {wine.year}
            {wine.price}
            {wine.details}
            {wine.image}
          </div>
        );
      });
    }
    return wineList.map((wine, index) => {
      return (
        <div key={index}>
          {wine.name}
          {wine.type}
          {wine.year}
          {wine.price}
          {wine.details}
          {wine.image}
        </div>
      );
    });
  };

  const loading = () => <h1>Loading...</h1>;

  return (
    <section className="Main-Disp">
      <Panel
        wineList={wineList}
        setFilteredReds={setFilteredReds}
        setFilteredWhites={setFilteredWhites}
        setMainDisplay={setMainDisplay}
      />
      {wineList ? loaded() : loading()}
    </section>
  );
}
