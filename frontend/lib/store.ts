import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { Action, ThunkAction } from "@reduxjs/toolkit";

//importar todos los reducers
import { tasksApiSlice } from "@/lib/features/tasks/tasksApiSlice";
import { tasksSlice } from "@/lib/features/tasks/tasksSlice";
import { appSlice } from "@/lib/features/app/appSlice";
import { labelApiSlice } from "@/lib/features/label/labelApiSlice";
import { priorityApiSlice } from "@/lib/features/priority/priorityApiSlice";
import { statusApiSlice } from "@/lib/features/status/statusApiSlice";
import { hearthstoneApiSlice } from "./features/tasks/hearthstoneApiSlice";

const rootReducer = combineReducers({
  app: appSlice.reducer,
  tasks: tasksSlice.reducer,
  tasksApi: tasksApiSlice.reducer,
  labelApi: labelApiSlice.reducer,
  priorityApi: priorityApiSlice.reducer,
  statusApi: statusApiSlice.reducer,
  hearthstoneApi: hearthstoneApiSlice.reducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(
        tasksApiSlice.middleware,
        hearthstoneApiSlice.middleware,
        labelApiSlice.middleware,
        statusApiSlice.middleware,
        priorityApiSlice.middleware
      );
    },
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
