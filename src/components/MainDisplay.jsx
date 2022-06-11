import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Panel({ wineList, setWine, setFilteredList }) {

  const PanelDiv = styled.div`
  background-color: RGBA(126, 15, 16,.5);
  color: white;
  font-size:16pt;
  border-radius:10px;
  width: 80%;
  align-items: center;
  padding: 50px;
&:hover,
  &:focus {
    color: palevioletred;
  }
  &:active {
    color: white;
`

  const handleClick = (ele) => {
    setWine(ele);
    console.log("Clicked" + ele);
    setFilteredList(null)
  };

  const handleFilter = (list) => {
    setFilteredList(list)
    setWine(null)
  }

  const loaded = () => {
    const whites = wineList.filter((wine) => {
      return wine.type === "White";
    });
    const reds = wineList.filter((wine) => {
      return wine.type === "Red";
    });
    return (
  
      <>
          <h1 onClick={() => handleFilter(whites)}>Whites</h1>
          {whites.map((w, idx) => {
            return (
              <div className="whites" key={idx} onClick={() => handleClick(w)}>
                {w.name}
              </div>
             
            );
          })}
        
       
          <h1 onClick={() => handleFilter(reds)}>Reds</h1>
          {reds.map((r, idx) => {
            return (
             
              <div key={idx} onClick={() => handleClick(r)}>
                <FontAwesomeIcon icon="fa-solid fa-wine-glass" />
                {r.name}
              </div>
              
              
            );
          })}
       
      </>
      
    );
  };
  
  return (
    <PanelDiv>
    <div className="Panel">{wineList ? loaded() : <h1>Loading...</h1>}</div>
    </PanelDiv>
  );
}
