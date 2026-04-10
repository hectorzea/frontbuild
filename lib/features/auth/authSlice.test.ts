import reducer, { AuthState, logout } from "./authSlice";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: "unknown" })).toEqual({
    accessToken: null,
    user: null,
  });
});

test("should clean the access token and user state", () => {
  const previousState: AuthState = {
    accessToken: "123",
    user: "test@test.com",
  };

  expect(reducer(previousState, logout())).toEqual({
    accessToken: null,
    user: null,
  });
});
