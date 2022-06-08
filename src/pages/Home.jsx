import MainDisplay from "../components/MainDisplay";
import Panel from "../components/Panel";

export default function Home ({ wineList }) {

    

    return(
        <main>
            <Panel wineList={wineList}/>
            <MainDisplay wineList={wineList}/>
        </main> 
    )
}