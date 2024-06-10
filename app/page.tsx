import Maze from "@/components/maze";
import { createGame, getRoomInfo } from "@/lib/api";
import { RoomType } from "@/utils/types";

export default async function Home() {
  const token: string = await createGame();
  const startRoom: RoomType = await getRoomInfo(token);
  console.log("Token: ", token);
  console.log("Start Room: ", startRoom);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Maze token={token} room={startRoom} />
    </div>
  );
}
