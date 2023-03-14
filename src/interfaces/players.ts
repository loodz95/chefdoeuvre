import { SavedPlayers } from "./savedPlayers"

export interface Players{
  id:number
  lastName: string,
  firstName: string,
  age: number,
  country: string,
  position: string,
  rate: number,
  speed: number,
  shots: number,
  pass: number,
  dribbles: number,
  defence: number,
  power: number,
  picture:string,
  savedplayers:SavedPlayers
  typeplayer: number       
}