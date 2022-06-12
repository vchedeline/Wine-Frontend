import Panel from "../components/Panel";
import MainDisplay from "../components/MainDisplay";

export default function Home(props) {
  return (
    <div>
      <main>
        <Panel
          wineList={props.wineList}
          setWine={props.setWine}
          setFilteredList={props.setFilteredList}
          getWine={props.getWine}
          setWineList={props.setWineList}
        />
        <MainDisplay
          wineList={props.wineList}
          wine={props.wine}
          filteredList={props.filteredList}
          updateWine={props.updateWine}
          handleDelete={props.handleDelete}
        />
      </main>
    </div>
  );
}
