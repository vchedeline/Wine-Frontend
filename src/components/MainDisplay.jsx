import styled from "styled-components";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledDiv = styled.div`
  background-color: transparent;
  border-radius: 3%;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  padding: 20px;

  img {
    height: 200px;
  }

  button {
    background-color: RGBA(126, 15, 16, 0.7);
    margin: 5px;
    padding: 5px;
    width: 8em;
    font-size: large;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      color: maroon;
      width: 20vw;
      margin: 20px;
      font-size: larger;
      text-align: center;
    }
  }

  .top-info {
    display: flex;
    justify-content: space-between;
    font-size: xx-large;
    text-align: start;
    border-bottom: 2px solid white;
    margin-bottom: 20px;
  }

  .info {
    display: flex;
    align-items: center;
    font-size: larger;
  }
`;

export default function MainDisplay({
  wineList,
  wine,
  filteredList,
  updateWine,
  handleDelete,
  setWine,
  setFilteredList
}) {
  let navigate = useNavigate();
  const [editForm, setEditForm] = useState(false);

  const handleClick = (ele) => {
    setWine(ele);
    setFilteredList(null);
  };

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
              Update Wine
            </button>
          </form>
        </StyledDiv>
      );
    }
    if (wine) {
      return (
        <StyledDiv>
          <div className="top-info">
            {wine.name} - {wine.type}
            <div> ${wine.price}</div>
          </div>
          <div className="info">
            <img src={wine.image} alt={wine.name} />
            <div>
              {wine.year} <br />
              <br />"{wine.details}"<br />
              <br />
              <button
                onClick={() => {
                  setEditForm(wine);
                }}>
                Edit
              </button>
              <button onClick={() => handleDelete()}>Delete</button>
            </div>
          </div>
        </StyledDiv>
      );
    }
    if (filteredList) {
      return filteredList.map((ele, idx) => {
        return (
          <StyledDiv key={idx}>
            <div className="top-info" onClick={() => handleClick(ele)}>
              {ele.name} - {ele.type}
              <div> ${ele.price}</div>
            </div>
            <div className="info">
              <img src={ele.image} alt={ele.name} />
              <div>
                {ele.year} <br />
                <br />"{ele.details}"
              </div>
            </div>
          </StyledDiv>
        );
      });
    }

    return wineList.map((ele, idx) => {
      return (
        <StyledDiv key={idx}>
            <div className="top-info" onClick={() => handleClick(ele)}>
            {ele.name} - {ele.type}
            <div> ${ele.price}</div>
          </div>
          <div className="info">
            <img src={ele.image} alt={ele.name} />
            <div>
              {ele.year} <br />
              <br />"{ele.details}"
            </div>
          </div>
        </StyledDiv>
      );
    });
  };

  return (
    <div className="Main-Disp">{wineList ? loaded() : <h1>Loading...</h1>}</div>
  );
}
