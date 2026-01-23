import { create } from 'zustand';
import { persist } from 'zustand/middleware'; 


const INITIAL_STATE = {
  RACE: { label: "South Asian", percentage: 0 },
  AGE: { label: "50-59", percentage: 0 },
  SEX: { label: "Male", percentage: 0 },
};

interface AnalysisStore {
  userSelections: typeof INITIAL_STATE;
  setAnalysisResults: (results: any) => void;
  updateSelection: (category: keyof typeof INITIAL_STATE, label: string, percentage: number) => void;
  resetSelections: () => void;
}

export const useAnalysisStore = create<AnalysisStore>()(
  persist(
    (set) => ({
  userSelections: INITIAL_STATE,

  setAnalysisResults: (results) => set({
    userSelections: {
      RACE: { label: results.race, percentage: results.racePercentage },
      AGE: { label: results.age, percentage: results.agePercentage },
      SEX: { label: results.sex, percentage: results.sexPercentage },
    }
  }),

    updateSelection: (category, label, percentage) =>
        set((state) => ({
          userSelections: {
            ...state.userSelections,
            [category]: { label, percentage },
          },
        })),

      resetSelections: () => set({ userSelections: INITIAL_STATE }),
    }), 
    { 
      name: 'ai-analysis-storage' 
    } 
  )
);

