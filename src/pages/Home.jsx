import Panel from "../components/Panel";
import MainDisplay from "../components/MainDisplay";
import Footer from "../components/Footer";

export default function Home(props) {
  return (
    <div>
        <main>
          <Panel
            wineList={props.wineList}
            setWine={props.setWine}
            setFilteredList={props.setFilteredList}
            getWine={props.getWine}
          />
          <MainDisplay
            wineList={props.wineList}
            wine={props.wine}
            filteredList={props.filteredList}
            setFilteredList={props.setFilteredList}
            updateWine={props.updateWine}
            handleDelete={props.handleDelete}
            setWine={props.setWine}
          />
        </main>   
    </div>
  );
}