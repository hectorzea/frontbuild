import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { Action, ThunkAction } from "@reduxjs/toolkit";

//importar todos los reducers
import { tasksApiSlice } from "@/lib/features/tasks/tasksApiSlice";
import { tasksSlice } from "@/lib/features/tasks/tasksSlice";
import { hearthstoneApiSlice } from "./features/tasks/hearthstoneApiSlice";
import { authSlice } from "./features/auth/authSlice";
import { authApiSlice } from "./features/auth/authApiSlice";

const rootReducer = combineReducers({
  tasks: tasksSlice.reducer,
  tasksApi: tasksApiSlice.reducer,
  auth: authSlice.reducer,
  authApi: authApiSlice.reducer,
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
        authApiSlice.middleware,
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
