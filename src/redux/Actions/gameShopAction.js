export const BUY_POKEMON = "BUY_POKEMON";
export const RETURN_POKEMON = "RETURN_POKEMON";

export const buy_pokemon_action = (cantidad) => {
  return {
    type: BUY_POKEMON,
    payload: cantidad,
  };
};

export const return_pokemon_action = (cantidad) => {
  return {
    type: RETURN_POKEMON,
    payload: cantidad,
  };
};
