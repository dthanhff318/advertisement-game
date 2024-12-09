import ListGame, { TGame } from "@/listgame/list-game";
import { create } from "zustand";
type GameState = {
  currentGame: TGame;
  updateCurrentGame: (game: TGame) => void;
};
const useGame = create<GameState>((set) => ({
  currentGame: ListGame[0],
  updateCurrentGame: (game: TGame) =>
    set({
      currentGame: game,
    }),
}));

export default useGame;
