import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContextGlobal();
  
 

  return (
    <div className='home'>
      <h1>Home</h1>
      {state.dentists?.length > 0 && ( // Check if dentists exists and has elements
        <div>
          {state.dentists.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))}
        </div>
      )}
      {!state.dentists?.length && <p>Loading dentists...</p>}  {/* Display loading message */}
    </div>
  );
};

export default Home

