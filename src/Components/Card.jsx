import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Card = ({ dentist }) => {
  const { state, dispatch } = useContextGlobal();
  
  // Verifica si el dentista ya está en los favoritos
  const isFav = state.favs.some((fav) => fav.id === dentist.id);

  // Maneja la lógica de agregar o remover favoritos
  const addFav = () => {
    if (isFav) {
      dispatch({ type: "REMOVE_FAV", payload: dentist });
    } else {
      dispatch({ type: "ADD_FAV", payload: dentist });
    }
  };

  return (
    <div className="card">
      <Link to={`/detail/${dentist.id}`}>
        <h3>{dentist.name}</h3>
      </Link>
      <img src="/public/images/doctor.jpg" alt="img dentista" />
      <p>Username: {dentist.username}</p>
      <button onClick={addFav}>{isFav ? "🌟" : "⭐"}</button>
    </div>
  );
};

export default Card;
