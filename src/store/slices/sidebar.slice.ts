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
    },
    setGlobalSidebar: (state, action) => {
      state.isGlobalSidebarOpen = action.payload;
    },

    toggleFilterSidebar: (state) => {
      state.isFilterSidebarOpen = !state.isFilterSidebarOpen;
    },

    setFilterSidebar: (state, action) => {
      state.isFilterSidebarOpen = action.payload;
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
  setFilterSidebarContent
} = sidebarSlice.actions;
