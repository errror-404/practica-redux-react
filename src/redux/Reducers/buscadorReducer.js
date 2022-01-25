import {
  BUSCAR_POKEMON,
  BUSCAR_POKEMON_SUCCESS,
  BUSCAR_POKEMON_FAIL,
} from "../Actions/buscadorAction";

const initialState = {
  loading: false,
  pokemon: [],
  error: "",
};

const buscador = (state = initialState, action) => {
  switch (action.type) {
    case BUSCAR_POKEMON:
      return {
        ...state,
        loading: true,
      };
    case BUSCAR_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemon: action.payload,
        error: "",
      };
    case BUSCAR_POKEMON_FAIL:
      return {
        ...state,
        loading: false,
        pokemon: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default buscador;
