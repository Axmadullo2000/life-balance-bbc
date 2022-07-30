// import { createReducer } from "@reduxjs/toolkit"
// import { activeFilterChanged, filtersFetched, filtersFetchedError, filtersFetching } from "../actions"

// const initialState = {
//     filters: [],
//     filterLoadingStatus: "default",
//     activeFilter: "all",
// }


// export const filter = createReducer(initialState, {
//     [ filtersFetching ]: state => {state.filterLoadingStatus = "loading"},
//     [ filtersFetched ]: (state, action) => {
//         state.filters = action.payload;
//         state.filterLoadingStatus = "default";
//     },
//     [ filtersFetchedError ]: (state) => {state.filterLoadingStatus = "error"},
//     [ activeFilterChanged ]: (state, action) => {state.activeFilter = action.payload},
// }, [], (state) => state)



// export const filter = createReducer(initialState, (builder) => {
//     builder
//         .addCase(filtersFetching, (state) => {
//             state.filterLoadingStatus = "loading"
//         })
//         .addCase(filtersFetched, (state, action) => {
//             state.filters = action.payload;
//             state.filterLoadingStatus = "default";
//         })
//         .addCase(filtersFetchedError, (state) => {
//             state.filterLoadingStatus = "error"
//         })
//         .addCase(activeFilterChanged, (state, action) => {
//             state.activeFilter = action.payload
//         })
//         .addDefaultCase(() => {})
// })
