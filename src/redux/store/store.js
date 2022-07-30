import { configureStore } from '@reduxjs/toolkit'

// reducers

import news from "../../components/action_reducer/NewsSlice";
import filter from "../../components/action_reducer/FilterSlice";


const logger = () => (next) => (action) => {
    if (typeof action === "string") {
      return next({type: action})
    }

    return next(action)
  }

export const store = configureStore({
        reducer: { news, filter },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
        devTools: true
    }
)
