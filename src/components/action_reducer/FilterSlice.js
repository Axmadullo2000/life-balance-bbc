import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../hook/useHttp";

const initialState = {
  filters: [],
  filterLoadingStatus: "default",
  activeFilter: "all",
};

export const fetchFilter = createAsyncThunk(
  "filter/fetchFilter",
  async () => {
    const { request } = useHttp()
    const response = request("http://localhost:3001/filters")
    return await response
  }
)

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    activeFilterChanged: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilter.pending, state => {state.filterLoadingStatus = "loading"})
      .addCase(fetchFilter.fulfilled, (state, action) => {
        state.filterLoadingStatus = "default";
        state.filters = action.payload
      })
      .addCase(fetchFilter.rejected, state => {state.filterLoadingStatus = "error"})
      .addDefaultCase(() => {})
  }
});

const { reducer, actions } = FilterSlice

export default reducer;

export const { activeFilterChanged, filtersFetched, filtersFetchedError, filtersFetching } = actions;

