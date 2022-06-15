import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FiPlusCircle, FiHome } from 'react-icons/fi'

const PanelDiv = styled.div`
  background-color: RGBA(126, 15, 16, 0.5);
  color: white;
  height: 100%;
  font-size: 16pt;
  border-radius: 10px;
  width: 100%;
  align-items: center;
  padding: 1em;
  &:hover,
  &:focus {
    color: palevioletred;
  }
  &:active {
    color: white;
  }
  
  h1 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 0;
  }
  .wine-list {
    font-size: 20px;
  }
`

const Icons = styled.button`
  font-size: 30px;
  text-decoration: none;
  border: none;
  background-color: transparent;
`
const FullPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`

export default function Panel ({
  wineList,
  setWine,
  setFilteredList,
  setWineList,
  getWine
}) {
  const handleClick = ele => {
    setWine(ele)
    setFilteredList(null)
  }

  const handleFilter = list => {
    setFilteredList(list)
    setWine(null)
  }

  const loaded = () => {
    const whites = wineList.filter(wine => {
      return wine.type === 'White'
    })

    const reds = wineList.filter(wine => {
      return wine.type === 'Red'
    })

    return (
      <FullPanel>

        <div>
          <h1 onClick={() => handleFilter(whites)}>
            <Link to='/wine'>
              <Icons>
                <FiPlusCircle />
              </Icons>
            </Link>
            Whites
            <Icons>
              <FiHome
                onClick={() => {
                  setWine(null)
                  setFilteredList(null)
                  getWine()
                }}
              />
            </Icons>
          </h1>
          {whites.map((w, idx) => {
            return (
              <div className='wine-list' key={idx} onClick={() => handleClick(w)}>
                {w.name}
              </div>
            )
          })}

          <h1 onClick={() => handleFilter(reds)}>Reds</h1>
          {reds.map((r, idx) => {
            return (
              <div className='wine-list' key={idx} onClick={() => handleClick(r)}>
                {r.name}
              </div>
            )
          })}
        </div>
      </FullPanel>
    )
  }

  return (
    <PanelDiv>
      <div className='Panel'>{wineList ? loaded() : <h1>Loading...</h1>}</div>
    </PanelDiv>
  )
}
