import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

interface HeaderState {
  activeSection: string;
  timeOfLastClick: number;
}

const initialState: HeaderState = {
  activeSection: "Home",
  timeOfLastClick: 0,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setActiveSection(state, action) {
      state.activeSection = action.payload;
    },
    setTimeOfLastClick(state, action) {
      state.timeOfLastClick = action.payload;
    },
  },
});

export const { setActiveSection, setTimeOfLastClick } = headerSlice.actions;

export const selectActiveSection = (state: RootState) =>
  state.header.activeSection;
export const selectTimeOfLastClick = (state: RootState) =>
  state.header.timeOfLastClick;

export default headerSlice.reducer;
