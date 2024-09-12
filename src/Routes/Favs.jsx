import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {
  const { state } = useContextGlobal();

  return (
    <>
    <div className="title"><h1>Dentistas Favoritos</h1></div>
      
      <div className="card-grid">
        {state.favs.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </>
  );
};

export default Favs;

