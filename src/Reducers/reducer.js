export const reducer = (state, action) => {
    switch (action.type) {
      case "GET_DENTISTS":
        return { ...state, dentists: action.payload };
  
      case "ADD_FAV":
        return { ...state, favs: [...state.favs, action.payload] };
  
      case "TOGGLE_THEME":
        return { ...state, theme: !state.theme }; // Corrige para solo cambiar el tema, manteniendo el resto del estado
  
      case "REMOVE_FAV":
        const filterFavs = state.favs.filter(
          (fav) => fav.id !== action.payload.id
        );
        return { ...state, favs: filterFavs };
  
      default:
        return state; // Asegúrate de devolver el estado actual si la acción no coincide
    }
  };
  