import { create } from "zustand";

const useGame = create((set) => ({
  gameList: [],
  updateBears: (newBears) => set({ bears: newBears }),
}));

export default useGame;
