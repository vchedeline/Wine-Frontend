import MainDisplay from "../components/MainDisplay";

export default function Home({
  wineList,
  setFilteredReds,
  setFilteredWhites,
  filteredReds,
  filteredWhites,
  setMainDisplay,
  mainDisplay,
}) {
  return (
    <main>
      <MainDisplay
        wineList={wineList}
        filteredReds={filteredReds}
        filteredWhites={filteredWhites}
        setFilteredReds={setFilteredReds}
        setFilteredWhites={setFilteredWhites}
        setMainDisplay={setMainDisplay}
        mainDisplay={mainDisplay}
      />
    </main>
  );
}
