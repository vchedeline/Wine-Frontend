import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainDisplay({
  wineList,
  wine,
  filteredList,
  updateWine,
  handleDelete,
}) {
  const StyledDiv = styled.div`
    background-color: #adb5bd;
    border: 5px solid black;
    border-radius: 3%;
    width: 50%;
    align-items: center;
    margin: 40px auto;
    padding: 20px;
  `;

  let navigate = useNavigate();
  const [editForm, setEditForm] = useState(false);

  // function for form
  const handleChange = (event) => {
    setEditForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    updateWine(editForm, wine._id);
    setEditForm(false);
    navigate("/");
  };

  // const handleDelete = async () =>{
  //   if(wine){
  //     const id = wine._id;
  //     await fetch(URL + "wine/" + id,{
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "Application/json",
  //       }
  //     }).catch(err =>console.log(err));

  //     //make api call and set wineLest
  //     getWine();

  //     //reset wine
  //     setWine(null);
  //   };

  // }

  const loaded = () => {
    if (editForm) {
      return (
        <StyledDiv>
          <form onSubmit={handleSubmit}>
            <h1>{wine.name}</h1>
            <input
              type="text"
              value={editForm.name}
              name="name"
              onChange={handleChange}
              placeholder={wine.name}
            />
            <input
              type="text"
              value={editForm.type}
              name="type"
              onChange={handleChange}
              placeholder={wine.type}
            />
            <input
              type="text"
              value={editForm.year}
              name="year"
              onChange={handleChange}
              placeholder={wine.year}
            />
            <input
              type="text"
              value={editForm.price}
              name="price"
              onChange={handleChange}
              placeholder={wine.price}
            />
            <input
              type="text"
              value={editForm.details}
              name="details"
              onChange={handleChange}
              placeholder={wine.details}
            />
            <input
              type="text"
              value={editForm.image}
              name="image"
              onChange={handleChange}
              placeholder={wine.image}
            />
            <button type="submit" value="submit">
              Submit
            </button>
          </form>
        </StyledDiv>
      );
    }
    if (wine) {
      return (
        <StyledDiv>
          <div>{wine.name}</div>
          <button
            onClick={() => {
              setEditForm(wine);
            }}>
            Edit
          </button>
          <button>Delete</button>
          <button onClick={() => handleDelete()}>Delete</button>
        </StyledDiv>
      );
    }
    if (filteredList) {
      return filteredList.map((ele, idx) => {
        return (
          <StyledDiv>
            <div key={idx}>{ele.name}</div>
          </StyledDiv>
        );
      });
    }
    return wineList.map((ele, idx) => {
      return (
        <StyledDiv>
          <div key={idx}>{ele.name}</div>
        </StyledDiv>
      );
    });
  };

  return (
    <div className="Main-Disp">{wineList ? loaded() : <h1>Loading...</h1>}</div>
  );
}
