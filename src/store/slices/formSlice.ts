import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type BudgetRange = "3–5 L" | "5–10 L" | "10–15 L" | "15–25 L" | "25 L+" | "";

export interface FormState {
  name: string;
  email: string;
  phone: string;
  budget: BudgetRange;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  budget: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ key: keyof FormState; value: string }>
    ) => {
      const { key, value } = action.payload;
      // @ts-expect-error runtime cast for union type
      state[key] = value;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, resetForm } = formSlice.actions;
export default formSlice.reducer;
