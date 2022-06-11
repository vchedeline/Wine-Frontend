import { useState } from "react";
import { useNavigate } from "react-router";

export default function AddWine({ wineList, addWine }) {
  const [newWine, setNewWine] = useState([]);
  const navigate = useNavigate();

  const handleChange = (evt) => {
    setNewWine({ ...NetworkInformation, [evt.target.name]: evt.target.value });
  };

  const submitWine = (evt) => {
    evt.preventDefault();
    addWine(newWine);
    setNewWine([]);
    navigate("/home");
  };

  return (
    <div>
      <h1>Enter New Wine</h1>
      <form method="">
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
          placeholder="image"
        />
      </form>
    </div>
  );
}
