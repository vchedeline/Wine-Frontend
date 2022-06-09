import MainDisplay from '../components/MainDisplay'
import Panel from '../components/Panel'

export default function Reds ({
  wineList,
  setFilteredReds,
  setFilteredWhites,
  filteredReds,
  filteredWhites
}) {
  return (
    <main>
      <Panel
        wineList={wineList}
        setFilteredReds={setFilteredReds}
        setFilteredWhites={setFilteredWhites}
      />
      <MainDisplay
        wineList={wineList}
        filteredReds={filteredReds}
        filteredWhites={filteredWhites}
      />
    </main>
  )
}
