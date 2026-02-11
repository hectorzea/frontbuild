import { render, screen, waitFor } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import type { AppStore, RootState } from "@/lib/store";
import { setupStore } from "@/lib/store";
import userEvent from "@testing-library/user-event";
// As a basic setup, import your same slice reducers
//import {tasksSlice} from '@/lib/features/tasks/tasksSlice'

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {},
) {
  const {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: React.PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  );

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

export const runNewTaskFormTests = async () => {
  const user = userEvent.setup();

  expect(screen.getByTestId("task-form-title")).toBeInTheDocument();
  expect(screen.getByTestId("task-form-status")).toBeInTheDocument();
  expect(screen.getByTestId("task-form-label")).toBeInTheDocument();
  expect(screen.getByTestId("task-form-priority")).toBeInTheDocument();

  await user.click(screen.getByTestId("task-form-submit-button"));

  await waitFor(() => {
    expect(screen.getByText("Title is required")).toBeInTheDocument();
  });
};
