// searchSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAndFilterGames = createAsyncThunk(
  "search/fetchAndFilterGames",
  async (filter = {}) => {
    const { searchTerm = "", category = "" } = filter;
    try {
      const response = await axios.get(
        `http://localhost:3001/games?name_like=${searchTerm}&category_like=${category}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAndFilterGames.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAndFilterGames.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAndFilterGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
