import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const INITIAL_STATE = {
  RACE: { label: "South Asian", percentage: 0 },
  AGE: { label: "50-59", percentage: 0 },
  SEX: { label: "Male", percentage: 0 },
};

const getTopPrediction = (dataObject: Record<string, number>) => {
  if (!dataObject || Object.keys(dataObject).length === 0) {
    return { label: "Unknown", percentage: 0 };
  }

  const [label, value] = Object.entries(dataObject).reduce((prev, curr) => 
    curr[1] > prev[1] ? curr : prev
  );

  return {
    label: label.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    percentage: Math.round(value * 100),
  };
};

interface AnalysisStore {
  userSelections: typeof INITIAL_STATE;
  rawAiResults: any | null; 
  setAnalysisResults: (results: any) => void;
  updateSelection: (category: keyof typeof INITIAL_STATE, label: string, percentage: number) => void;
  resetSelections: () => void;
}

export const useAnalysisStore = create<AnalysisStore>()(
  persist(
    (set) => ({
      userSelections: INITIAL_STATE,
      rawAiResults: null, 

      setAnalysisResults: (results) => {
        if (!results) return;

        const raceResult = getTopPrediction(results.race);
        const ageResult = getTopPrediction(results.age);
        const sexResult = getTopPrediction(results.gender); 

        set({
          rawAiResults: results, 
          userSelections: {
            RACE: raceResult,
            AGE: ageResult,
            SEX: sexResult,
          }
        });
      },

      updateSelection: (category, label, percentage) =>
        set((state) => ({
          userSelections: {
            ...state.userSelections,
            [category]: { label, percentage },
          },
        })),

      resetSelections: () => set({ userSelections: INITIAL_STATE, rawAiResults: null }),
    }),
    { name: 'ai-analysis-storage' }
  )
);
