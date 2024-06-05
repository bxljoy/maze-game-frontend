import {
  CREATE_GAME_ENDPOINT,
  ROOM_INFO_ENDPOINT,
  MOVE_ENDPOINT,
  REFRESH_TOKEN,
} from "@/utils/constants";

import axios from "axios";
import { RoomType } from "@/utils/types";

export async function createGame(): Promise<any> {
  const gameConfig = {
    type: "Graph",
    size: 0,
    seed: 0,
  };
  const headers = { Authorization: `Bearer ${REFRESH_TOKEN}` };
  const response = await axios.post(CREATE_GAME_ENDPOINT, {
    headers,
    data: gameConfig,
  });
  return response.data.token;
}

export async function move(token: string, direction: string): Promise<any> {
  const headers = { Authorization: `Bearer ${token}` };
  const payload = { direction: direction };
  await axios.put(MOVE_ENDPOINT, payload, { headers });
}

export async function getRoomInfo(token: string): Promise<RoomType> {
  const headers = { Authorization: `Bearer ${token}` };
  const response = await axios.get(ROOM_INFO_ENDPOINT, { headers });
  return response.data;
}
