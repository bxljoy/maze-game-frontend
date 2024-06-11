"use client";

import React from "react";
import Room from "./room";
import { RoomType } from "@/utils/types";
import { useState } from "react";
import { getRoomInfo, move } from "@/lib/api"; // Define room types in types.ts
import { useRouter } from "next/navigation";

export default function Maze({
  token,
  room,
}: {
  token: string;
  room: RoomType;
}) {
  const [rooms, setRooms] = useState<RoomType[]>([room]);
  const [visitedRooms, setVisitedRooms] = useState<string[]>([room.id]);
  const [currentRoom, setCurrentRoom] = useState<string>(room.id);

  const router = useRouter();

  const handleMove = async (direction: string) => {
    console.log("Direction: ", direction);
    await move(token, direction);
    const newRoom = await getRoomInfo(token);
    console.log("New Room: ", newRoom);
    console.log("effect: ", newRoom.effect);
    if (newRoom.effect === "Victory") {
      alert("You have won the game! Restart!");
      router.refresh();
    }
    setCurrentRoom(newRoom.id);
    if (visitedRooms.includes(newRoom.id)) return; // Prevent infinite loop
    setVisitedRooms([...visitedRooms, newRoom.id]); // Append the new room to the visited rooms array
    setRooms([...rooms, newRoom]); // Append the new room to the existing rooms array
  };
  return (
    <div>
      {rooms.map((room) => (
        <Room
          key={room.id}
          room={room}
          handleMove={handleMove}
          currentRoom={currentRoom === room.id}
        />
      ))}
    </div>
  );
}
