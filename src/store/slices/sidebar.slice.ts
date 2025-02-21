import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGlobalSidebarOpen: true,
  isFilterSidebarOpen: false,
  filterSidebarContent: null,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    toggleGlobalSidebar: (state) => {
      state.isGlobalSidebarOpen = !state.isGlobalSidebarOpen;
      state.isFilterSidebarOpen = false;
    },
    setGlobalSidebar: (state, action) => {
      state.isGlobalSidebarOpen = action.payload;
      state.isFilterSidebarOpen = false;
    },

    toggleFilterSidebar: (state) => {
      if (!state.isFilterSidebarOpen === true) state.isGlobalSidebarOpen = false;
      state.isFilterSidebarOpen = !state.isFilterSidebarOpen;
    },

    setFilterSidebar: (state, action) => {
      if (action.payload === true) state.isGlobalSidebarOpen = false;

      state.isFilterSidebarOpen = action.payload;
      // state.isGlobalSidebarOpen = false;
    },

    setFilterSidebarContent: (state, action) => {
      state.filterSidebarContent = action.payload;
    },
  },
});

export const sidebarReducer = sidebarSlice.reducer;
export const {
  setFilterSidebar,
  setGlobalSidebar,
  toggleFilterSidebar,
  toggleGlobalSidebar,
  setFilterSidebarContent,
} = sidebarSlice.actions;
