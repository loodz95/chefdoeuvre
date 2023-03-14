import { Players } from "./players";
import { User } from "./users";

export interface SavedPlayers {
  player_id:Players
  user_id:User
  players:Players
}