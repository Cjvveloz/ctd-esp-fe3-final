import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/` + id;

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data)
      setDetail(res.data)
    });
  },[]);

  return (
    <div className='detail-container'> 
      <h1>Detalle dentista {detail.id}</h1> 
      <img src="/public/images/doctor.jpg" alt="img dentista" />
      <h3>Nombre: {detail.name}</h3>
      <h3>Email: {detail.email}</h3>
      <h3>Telefono: {detail.phone}</h3>
      <h3>Sitio Web: {detail.website}</h3>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail