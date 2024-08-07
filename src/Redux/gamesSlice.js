import { createSlice } from "@reduxjs/toolkit";
import { fetchDataByCategory } from "../utils/Fetch";

const initialState = {
  items: [],
  loading: false,
  error: null,
  selectedGame: null, // Bu satırı ekleyin
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setSelectedGame(state, action) {
      // Bu reducer'ı ekleyin
      state.selectedGame = action.payload;
    },
  },
});

export const { setItems, setLoading, setError, setSelectedGame } =
  gamesSlice.actions;

export const fetchAndFilterGames = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const data = await fetchDataByCategory();
    dispatch(setItems(data));
  } catch (error) {
    dispatch(setError(error.toString()));
  } finally {
    dispatch(setLoading(false));
  }
};

export default gamesSlice.reducer;
