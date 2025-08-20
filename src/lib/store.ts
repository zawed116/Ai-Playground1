import { create } from "zustand";

interface AppState {
  model: string;
  setModel: (model: string) => void;

  prompt: string;
  setPrompt: (prompt: string) => void;

  temperature: number;
  setTemperature: (t: number) => void;

  response: string;
  setResponse: (res: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  model: "GPT-3.5",
  setModel: (model) => set({ model }),

  prompt: "",
  setPrompt: (prompt) => set({ prompt }),

  temperature: 0.7,
  setTemperature: (t) => set({ temperature: t }),

  response: "",
  setResponse: (res) => set({ response: res }),
}));
