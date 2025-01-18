import { combineReducers, combineSlices, configureStore } from '@reduxjs/toolkit'
import type { Action, ThunkAction } from "@reduxjs/toolkit";

//importar todos los reducers
import { tasksApiSlice } from './features/tasks/tasksApiSlice';
import { tasksSlice } from './features/tasks/tasksSlice';
import { appSlice } from './features/app/appSlice';
import { labelApiSlice } from './features/label/labelApiSlice';
import { priorityApiSlice } from './features/priority/priorityApiSlice';
import { statusApiSlice } from './features/status/statusApiSlice';

// const rootReducer = combineSlices(appSlice, tasksSlice, tasksApiSlice, labelApiSlice, priorityApiSlice, statusApiSlice);
const rootReducer = combineReducers({
  app: appSlice.reducer,
  tasks: tasksSlice.reducer,
  tasksApi: tasksApiSlice.reducer,
  labelApi: labelApiSlice.reducer,
  priorityApi: priorityApiSlice.reducer,
  statusApi: statusApiSlice.reducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => {
      // return getDefaultMiddleware().concat(tasksApiSlice.middleware, labelApiSlice.middleware, priorityApiSlice.middleware, statusApiSlice.middleware);
      return getDefaultMiddleware().concat(tasksApiSlice.middleware, labelApiSlice.middleware, statusApiSlice.middleware, priorityApiSlice.middleware);
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
