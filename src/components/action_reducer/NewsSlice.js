import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

import { useHttp } from "../../hook/useHttp";
import { creatingNews, removeNews } from "../../App"


const newsAdapter = createEntityAdapter();


const initialState = newsAdapter.getInitialState({
  newsFetchingStatus: "default",
})


export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async() => {
    const { request } = useHttp()
    return await request("http://localhost:3001/news")
  }
)

const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    createNews: (state, action) => {
      creatingNews();
      newsAdapter.addOne(state, action.payload)
    },
    newsDelete: (state, action) => {
      removeNews();
      newsAdapter.removeOne(state, action.payload)
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {state.newsFetchingStatus = "loading"})

      .addCase(fetchNews.fulfilled, (state, action) => {
        state.newsFetchingStatus = "default";
        newsAdapter.setAll(state, action.payload);
      })

      .addCase(fetchNews.rejected, (state) => {state.newsFetchingStatus = "error"})
      .addDefaultCase(() => {})
  }
});


const { reducer, actions } = NewsSlice

export const { selectAll } = newsAdapter.getSelectors(state => state.news) 

export default reducer;

export const { createNews, errorDuringFetch, fetchedNews, newsDelete, newsFetching } = actions

