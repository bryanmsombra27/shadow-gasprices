import { create } from "zustand";

interface InitialState {
  location: number[];
}

interface Actions {
  setLocation: (location: number[]) => void;
}

type State = InitialState & Actions;

export const useLocationStore = create<State>()((set, get) => ({
  location: [],
  setLocation: (location: number[]) => set({ location }),
}));
