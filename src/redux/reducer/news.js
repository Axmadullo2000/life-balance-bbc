// import { createReducer } from "@reduxjs/toolkit"

// import { creatingNews, removeNews } from "../../App"
// import { createNews, errorDuringFetch, fetchedNews, newsDelete, newsFetching } from "../actions"

// const initialState = {
//     news: [],
//     newsFetchingStatus: "default"
// }


// export const news = createReducer(initialState, {
//     [ newsFetching ]: state => {state.newsFetchingStatus = "loading"},
//     [ fetchedNews ]: (state, action) => {
//         state.news = action.payload;
//         state.newsFetchingStatus = "default";
//     },
//     [ errorDuringFetch ]: (state) => {state.newsFetchingStatus = "error"},
//     [ createNews ]: (state, action) => {
//         creatingNews();
//         state.news.push(action.payload)
//     },
//     [ newsDelete ]: (state, action) => {
//         removeNews();
//         state.news = state.news.filter(s => s.id !== action.payload)
//     }

// }, [], (state) => state)



// export const news = createReducer(initialState, (builder) => {
//     builder
//         .addCase(newsFetching, (state) => {
//             state.newsFetchingStatus = "loading"
//         })
//         .addCase(fetchedNews, (state, action) => {
//             state.news = action.payload;
//             state.newsFetchingStatus = "default";
//         })
//         .addCase(errorDuringFetch, (state) => {
//             state.newsFetchingStatus = "error"
//         })
//         .addCase(createNews, (state, action) => {
//             creatingNews();
//             state.news.push(action.payload)
//         })
//         .addCase(newsDelete, (state, action) => {
//             removeNews();
//             state.news = state.news.filter(s => s.id !== action.payload)
//         })
// })
