import { combineReducers } from "redux";
import game_shop from "./gameShopReducers";
import buscador from "./buscadorReducer";

const rootReducer = combineReducers({
  game_shop,
  buscador,
});

export default rootReducer;
