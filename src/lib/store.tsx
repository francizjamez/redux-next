import {configureStore} from '@reduxjs/toolkit'
import counter from "@/lib/features/counter";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import {homeEpics} from "@/lib/features/counters/homeEpics";
import {homeCounterSlice} from "@/lib/features/counters/homeCounters";

export const rootEpic = combineEpics(
    ...homeEpics
);

const epicMiddleware = createEpicMiddleware();

export const makeStore = () => {

  const store =configureStore({
    reducer: {
      counter: counter,
      homeCounter: homeCounterSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware)
  })

  epicMiddleware.run(rootEpic);

  return store;
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']