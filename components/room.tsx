import React from "react";
import { RoomType } from "@/utils/types";
import { Button } from "./button";
import clsx from "clsx";
import { NORTH, SOUTH, EAST, WEST } from "@/utils/constants";

export default function Room({
  room,
  handleMove,
  currentRoom,
}: {
  room: RoomType;
  handleMove: (direction: string) => Promise<void>;
  currentRoom: boolean;
}) {
  const handleClick = async (direction: string) => {
    await handleMove(direction);
  };
  let north = false;
  let south = false;
  let east = false;
  let west = false;

  const exits = room.paths.map((path) => path.direction);
  if (!exits.includes(NORTH)) north = true;
  if (!exits.includes(SOUTH)) south = true;
  if (!exits.includes(EAST)) east = true;
  if (!exits.includes(WEST)) west = true;

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-3 border-4 border-indigo-600">
        <div>{""}</div>
        <Button
          className={clsx({
            "opacity-0 pointer-events-none": north,
          })}
          onClick={async () => await handleClick(NORTH)}
        >
          {NORTH}
        </Button>
        <div>{""}</div>
        <Button
          className={clsx({
            "opacity-0 pointer-events-none": west,
          })}
          onClick={async () => await handleClick(WEST)}
        >
          {WEST}
        </Button>
        <div
          className={clsx("flex items-center justify-center", {
            " bg-red-600": currentRoom,
          })}
        >
          {room.effect}
        </div>
        <Button
          className={clsx({
            "opacity-0 pointer-events-none": east,
          })}
          onClick={async () => await handleClick(EAST)}
        >
          {EAST}
        </Button>
        <div>{""}</div>
        <Button
          className={clsx({
            "opacity-0 pointer-events-none": south,
          })}
          onClick={async () => await handleClick(SOUTH)}
        >
          {SOUTH}
        </Button>
        <div>{""}</div>
      </div>
    </div>
  );
}
