import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiPlusCircle, FiHome } from "react-icons/fi";

const PanelDiv = styled.div`
  background-color: RGBA(126, 15, 16, 0.5);
  color: white;
  height: 125%;
  font-size: 16pt;
  border-radius: 10px;
  width: 80%;
  align-items: center;
  padding: 1em;

  &:hover,
  &:focus {
    color: tan;
  }
  &:active {
    color: white;
  }

  h1 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 0px;
    cursor: pointer;
  }

  h1: hover {
    color: tan;
  }

  .wine-list {
    font-size: 1.3rem;
  }

  .wine-list: hover {
    color: tan;
    cursor: pointer;
  }

  .white-wines {
    margin-top: 0px;
  }

  #small-nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  #icons:hover {
    font-size: 40px;
  }
`;

const Icons = styled.button`
  font-size: 150%;
  text-decoration: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: 65px;
  margin-right: 65px;
`;
const FullPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export default function Panel({ wineList, setWine, setFilteredList, getWine }) {
  const handleClick = (ele) => {
    setWine(ele);
    setFilteredList(null);
  };

  const handleFilter = (list) => {
    setFilteredList(list);
    setWine(null);
  };

  const displayOthers = (others) => {
    if (others.length === 0) return;
    else {
      return (
        <>
          <h1 onClick={() => handleFilter(others)}>Others</h1>
          {others.map((o, idx) => {
            return (
              <div
                className="wine-list"
                key={idx}
                onClick={() => handleClick(o)}>
                {o.name}
              </div>
            );
          })}
        </>
      );
    }
  };

  const loaded = () => {
    const whites = wineList.filter((wine) => {
      return wine.type === "White";
    });

    const reds = wineList.filter((wine) => {
      return wine.type === "Red";
    });

    const others = wineList.filter((wine) => {
      return wine.type !== "Red" && wine.type !== "White";
    });

    return (
      <FullPanel>
        <div>
          <div id="small-nav">
            <Link to="/newwine">
              <Icons id="icons">
                <FiPlusCircle />
              </Icons>
            </Link>
            <h1 onClick={() => handleFilter(whites)} className="white-wines">
              Whites
            </h1>
            <Icons id="icons">
              <FiHome
                onClick={() => {
                  setWine(null);
                  setFilteredList(null);
                  getWine();
                }}
              />
            </Icons>
          </div>
          {whites.map((w, idx) => {
            return (
              <div
                className="wine-list"
                key={idx}
                onClick={() => handleClick(w)}>
                {w.name}
              </div>
            );
          })}
          <h1 onClick={() => handleFilter(reds)}>Reds</h1>
          {reds.map((r, idx) => {
            return (
              <div
                className="wine-list"
                key={idx}
                onClick={() => handleClick(r)}>
                {r.name}
              </div>
            );
          })}
          {displayOthers(others)}
        </div>
      </FullPanel>
    );
  };

  return (
    <PanelDiv>
      <div className="Panel">{wineList ? loaded() : <h1>Loading...</h1>}</div>
    </PanelDiv>
  );
}
