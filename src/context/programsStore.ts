import create from "zustand";
import { IProgramData } from "../interface/programs.interface";

export interface IProgramStore {
  programs: IProgramData[];
  addProgram: (program: IProgramData) => void;
  removeProgram: (program: IProgramData) => void;
}

const initialState = {
  programs: [],
};

export const programsStore = create<IProgramStore>((set, get) => ({
  ...initialState,
  addProgram: (program: IProgramData) => {
    set({ programs: [...get().programs, program] });
  },
  removeProgram: (program: IProgramData) => {
    const updatedPrograms = [...get().programs].filter(
      (pr) => pr.programId.toString() !== program.programId.toString()
    );
    set({ programs: updatedPrograms });
  },
}));
