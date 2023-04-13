import { Game } from "./game.model";

export interface Order {
  totalAmount: string;
  createdAt: Date;
  gameList: Game[];
}
