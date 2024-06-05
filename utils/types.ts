export interface RoomType {
  id: string;
  floor: string;
  effect: string;
  paths: Path[];
}

export interface Path {
  direction: string;
  destination: string;
  requiredItem: string;
}
