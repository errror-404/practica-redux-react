import axios from "axios";

export const BUSCAR_POKEMON = "BUSCAR_POKEMON";
export const BUSCAR_POKEMON_SUCCESS = "BUSCAR_POKEMON_SUCCESS";
export const BUSCAR_POKEMON_FAIL = "BUSCAR_POKEMON_FAIL";

export const buscarPokemonAction = () => {
  return {
    type: BUSCAR_POKEMON,
  };
};

export const buscarPokemonSuccessAction = (pokemon) => {
  return {
    type: BUSCAR_POKEMON_SUCCESS,
    payload: pokemon,
  };
};

export const buscarPokemonFailAction = (error) => {
  return {
    type: BUSCAR_POKEMON_FAIL,
    payload: error,
  };
};

const fetchPokemon = (valor) => {
  return (dispatch) => {
    dispatch(buscarPokemonAction());
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
      .then((response) => {
        dispatch(buscarPokemonSuccessAction([response.data]));
      })
      .catch((error) => {
        dispatch(buscarPokemonFailAction("No se encontro ningun pokemon"));
      });
  };
};

export default fetchPokemon;
