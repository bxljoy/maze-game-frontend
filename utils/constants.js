// Constants
// const BASE_URL = "https://mazegame.plingot.com";
const BASE_URL = "https://maze-game-api-obi5.onrender.com";
const CREATE_GAME_ENDPOINT = `${BASE_URL}/Game/start`;
const ROOM_INFO_ENDPOINT = `${BASE_URL}/Room/current`;
const PLAYER_INFO_ENDPOINT = `${BASE_URL}/Player`;
const MOVE_ENDPOINT = `${BASE_URL}/Player/move`;
const REFRESH_TOKEN = "11111111-0000-0000-0000-000000000000";

const NORTH = "North";
const SOUTH = "South";
const WEST = "West";
const EAST = "East";

export {
  REFRESH_TOKEN,
  PLAYER_INFO_ENDPOINT,
  CREATE_GAME_ENDPOINT,
  ROOM_INFO_ENDPOINT,
  MOVE_ENDPOINT,
  NORTH,
  SOUTH,
  WEST,
  EAST,
};
