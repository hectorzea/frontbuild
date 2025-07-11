import { screen, waitFor } from "@testing-library/react";
import TasksPage from "@/app/[locale]/projects/tasks/page";
import { renderWithProviders } from "@/app/test-utils";
import { setupServer } from "msw/node";

import { handlers } from "@/app/mocks/handlers";
import { http, HttpResponse } from "msw";
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("TasksPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders TasksPage Page", async () => {
    renderWithProviders(<TasksPage />, {
      preloadedState: {
        tasks: {
          tasks: [],
        },
      },
    });
    await waitFor(() => {
      expect(screen.getByTestId("frontbuild-title")).toBeInTheDocument();
      expect(screen.getByTestId("user-nav-trigger")).toBeInTheDocument();
    });
  });
  it("Renders <Loading> when backend Error", async () => {
    server.use(
      http.get(
        `${process.env.NEXT_PUBLIC_FRONTBUILD_API_URL}/api/tasks`,
        () => {
          return new HttpResponse("Internal Server Error", { status: 500 });
        }
      )
    );
    renderWithProviders(<TasksPage />, {
      preloadedState: {
        tasks: {
          tasks: [],
        },
      },
    });

    //async call action to the backend, so we need to wait for the result a bit
    await waitFor(() => {
      expect(
        screen.getByText(
          "An error has ocurred while loading tasks from the API."
        )
      ).toBeInTheDocument();
    });
  });
});
