import { createSlice } from "@reduxjs/toolkit";
import { authApiSlice } from "./authApiSlice";

interface User {
  name: string;
}

interface AuthState {
  accessToken: string | null;
  user: User | null;
}

const initialState: AuthState = {
  accessToken: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
  extraReducers: (build) => {
    build.addMatcher(
      authApiSlice.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.accessToken;
      },
    );
    build.addMatcher(
      authApiSlice.endpoints.refresh.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.accessToken;
      },
    );
    build.addMatcher(authApiSlice.endpoints.logout.matchFulfilled, (state) => {
      state.accessToken = null;
      state.user = null;
    });
  },
});

export default authSlice.reducer;
