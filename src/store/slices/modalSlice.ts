import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProjectItem {
  id: string;
  title: string;
  city: string;
  image: string;
}

interface ModalState {
  isOpen: boolean;
  selectedProject: ProjectItem | null;
}

const initialState: ModalState = {
  isOpen: false,
  selectedProject: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openProjectModal: (state, action: PayloadAction<ProjectItem>) => {
      state.isOpen = true;
      state.selectedProject = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.selectedProject = null;
    },
  },
});

export const { openProjectModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
