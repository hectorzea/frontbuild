import { combineReducers,combineSlices, configureStore } from '@reduxjs/toolkit'
import type { Action, ThunkAction } from "@reduxjs/toolkit";

//importar todos los reducers
import { tasksApiSlice } from './features/tasks/tasksApiSlice';
import { tasksSlice } from './features/tasks/tasksSlice';

const rootReducer = combineSlices(tasksApiSlice, tasksSlice);

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(tasksApiSlice.middleware);
    },
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
