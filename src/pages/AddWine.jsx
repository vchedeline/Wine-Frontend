import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";

const StyledDiv = styled.div`
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
`;

export default function AddWine({ addWine }) {
  const [newWine, setNewWine] = useState({
    name: "",
    type: "",
    year: "",
    price: "",
    details: "",
    image: "https://i.imgur.com/HEbHUUf.png",
  });
  const navigate = useNavigate();

  const handleChange = (evt) => {
    setNewWine({ ...newWine, [evt.target.name]: evt.target.value });
  };

  const submitWine = (evt) => {
    evt.preventDefault();
    addWine(newWine);
    setNewWine([]);
    navigate("/");
  };

  return (
    <>
      <StyledDiv>
        <h1>Enter New Wine</h1>
        <form onSubmit={submitWine}>
          <input
            type="text"
            name="name"
            value={newWine.name}
            onChange={handleChange}
            placeholder="name"
          />
          <input
            type="text"
            name="type"
            value={newWine.type}
            onChange={handleChange}
            placeholder="type"
          />
          <input
            type="text"
            name="year"
            value={newWine.year}
            onChange={handleChange}
            placeholder="year"
          />
          <input
            type="text"
            name="price"
            value={newWine.price}
            onChange={handleChange}
            placeholder="price"
          />
          <input
            type="text"
            name="details"
            value={newWine.details}
            onChange={handleChange}
            placeholder="details"
          />
          <input
            type="text"
            name="image"
            value={newWine.image}
            onChange={handleChange}
            placeholder="https://i.imgur.com/8JnFwOu.png"
          />
          <button type="submit"> Add New Wine </button>
        </form>
        <button onClick={() => navigate("/")}>Cancel</button>
      </StyledDiv>
      <Footer />
    </>
  );
}
