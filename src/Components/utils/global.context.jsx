import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../../Reducers/reducer";

//export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();
const lsFavs = JSON.parse(localStorage.getItem('favs')) || [];

const initialState = {
  dentists: [],
  favs: lsFavs,
  theme: true,

};

export const ContextProvider = ({ children }) => {
 

  const [state, dispatch] = useReducer(reducer, initialState)


  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(()=> {
    axios.get(url).then((res)=>{
      console.log(res.data);
     // setDentists(res.data);
     dispatch({type: "GET_DENTISTS", payload: res.data});
    // Asegura que en caso de error, `dentists` siga siendo un array
    });
  }, []);

  
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    document.body.className = state.theme ? "light-theme" : "dark-theme";
  }, [state.theme]);


  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;

export const useContextGlobal = ( ) => useContext(ContextGlobal)