import MainDisplay from "../components/MainDisplay";
import Panel from "../components/Panel";

export default function Home ({ wineList }) {

    

    return(
        <main>
            <Panel/>
            <MainDisplay wineList={wineList}/>
        </main> 
    )
}