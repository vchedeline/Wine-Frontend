import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useParams, useNavigate} from 'react-router-dom'

//Styling
const StyledDiv = styled.div`
  background-color: #adb5bd;
  border: 5px solid black;
  border-radius: 3%;
  width: 50%;
  align-items: center;
  margin: 40px auto;
  padding: 20px;
`

export default function MainDisplay ({
  getWine,
  wineList,
  wine,
  filteredList,
  setWine,
  setFilteredList,
  URL
}) {
  const { id } = useParams()
  let navigate = useNavigate()
  const wineId = wineList.find((w) => w._id === id)

  const handleDelete = async () =>{
    console.log("Clicked Delete")
    //get wine id
    if(wine){
      const id = wine._id;
      await fetch(URL + "wine/" + id,{
        method: "DELETE",
        headers: {
          "Content-Type": "Application/json",
        }
      }).catch(err =>console.log(err));

      getWine();
      setWine(null);   
    };    
    
  }

  const loaded = () => {
    if (wine) {
      return (
        <StyledDiv>
          <div>{wine.name}</div>
          <button>Edit</button>
          <button onClick={()=> handleDelete()}>Delete</button>
        </StyledDiv>
      )
    }
    if (filteredList) {
      return filteredList.map((ele, idx) => {
        return (         
            <StyledDiv>
              <div key={idx}>{ele.name}</div>
            </StyledDiv>          
        )
      })
    }
    return wineList.map((ele, idx) => {
      return (
          <StyledDiv>
            <div key={idx}>{ele.name}</div>
          </StyledDiv>        
      )
    })
  }

  const EditWine = ( { id }) => {
    return(
      <StyledDiv>

      </StyledDiv>
    )
  }
  return (
    <div className='Main-Disp'>{wineList ? loaded() : <h1>Loading...</h1>}</div>
  )
}