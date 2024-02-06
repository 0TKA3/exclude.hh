import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  direction: 'frontend',
  framework: 'react',
  istypescript: 'javascript',
  jobformat: 'офис',
  grade: 'trainee',
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilters: (state, { payload }) => {
        state;
        state = payload
    },
  },
});

export const { setFilters } = filterSlice.actions;

export default filterSlice.reducer;
