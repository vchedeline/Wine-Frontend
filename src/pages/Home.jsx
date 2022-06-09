import MainDisplay from "../components/MainDisplay";
import Panel from "../components/Panel";

export default function Home({ wineList, setFilteredReds, setFilteredWhites }) {
  return (
    <main>
      <Panel
        wineList={wineList}
        setFilteredReds={setFilteredReds}
        setFilteredWhites={setFilteredWhites}
      />
      <MainDisplay wineList={wineList} />
    </main>
  );
}
