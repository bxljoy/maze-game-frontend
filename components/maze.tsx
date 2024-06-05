"use client";

import React from "react";
import Room from "./room";
import { RoomType } from "@/utils/types";
import { useState, useEffect } from "react";
import { createGame, getRoomInfo, move } from "@/lib/api"; // Define room types in types.ts
import Loading from "./loading";

export default function Maze() {
  const [token, setToken] = useState<string>("");
  const [rooms, setRooms] = useState<RoomType[]>([]);
  const [visitedRooms, setVisitedRooms] = useState<string[]>([]);
  const [currentRoom, setCurrentRoom] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const startGame = async () => {
      setIsLoading(true); // Start loading
      const startToken = await createGame();
      console.log("Token: ", startToken);
      const currentRoom = await getRoomInfo(startToken);
      console.log("Room: ", currentRoom);
      setToken(startToken);
      setRooms([currentRoom]);
      setVisitedRooms([currentRoom.id]);
      setCurrentRoom(currentRoom.id);

      setIsLoading(false); // End loading
    };
    startGame();
  }, []);

  const handleMove = async (direction: string) => {
    console.log("Direction: ", direction);
    await move(token, direction);
    const newRoom = await getRoomInfo(token);
    console.log("New Room: ", newRoom);
    setCurrentRoom(newRoom.id);
    if (visitedRooms.includes(newRoom.id)) return; // Prevent infinite loop
    setVisitedRooms([...visitedRooms, newRoom.id]); // Append the new room to the visited rooms array
    setRooms([...rooms, newRoom]); // Append the new room to the existing rooms array
  };
  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading &&
        rooms.map((room) => (
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
