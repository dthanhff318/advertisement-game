import { create } from "zustand";

const useGame = create((set) => ({
  gameList: [],
  updateBears: () => set({}),
}));

export default useGame;
