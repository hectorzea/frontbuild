import { render, screen, waitFor } from "@testing-library/react";
import AddNewMatchPage from "@/app/[locale]/projects/hs-card-search/mulligan/new-match/page";
import userEvent from "@testing-library/user-event";
import mockRouter from "next-router-mock";
import { server } from "@/app/mocks/server";
import { http, HttpResponse } from "msw";

describe("Add New Match Page - ", () => {
  it("Render full UI - Create match, SUCCESS Scenario", async () => {
    const user = userEvent.setup();
    render(<AddNewMatchPage />);
    expect(screen.getByText("New Match")).toBeInTheDocument();
    expect(
      screen.getByTestId("card-match-url-input-field")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Add the match URL and indicate W / L")
    ).toBeInTheDocument();
    expect(screen.getByTestId("switch-win-loose")).toBeInTheDocument();
    expect(
      screen.getByTestId("close-button-card-match-form")
    ).toBeInTheDocument();

    const input = screen.getByTestId("card-match-url-input-field");

    await user.type(
      input,
      "https://hsreplay.net/replay/UEpCuDvFktfgBpq6AjH4rP"
    );

    await user.click(screen.getByTestId("submit-button-card-match-result"));

    expect(mockRouter).toMatchObject({
      asPath: "/projects/hs-card-search/mulligan",
      pathname: "/projects/hs-card-search/mulligan",
    });
  });

  //test
  it("Render full UI - Create match, ERROR Scenario (Internal Server Error)", async () => {
    server.use(
      http.post(
        `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/hearthstone/card-match-results`,
        () => {
          return new HttpResponse("Internal Server Error", { status: 500 });
        }
      )
    );

    const user = userEvent.setup();
    render(<AddNewMatchPage />);
    expect(screen.getByText("New Match")).toBeInTheDocument();
    expect(
      screen.getByTestId("card-match-url-input-field")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Add the match URL and indicate W / L")
    ).toBeInTheDocument();
    expect(screen.getByTestId("switch-win-loose")).toBeInTheDocument();
    expect(
      screen.getByTestId("close-button-card-match-form")
    ).toBeInTheDocument();

    const input = screen.getByTestId("card-match-url-input-field");

    await user.type(
      input,
      "https://hsreplay.net/replay/UEpCuDvFktfgBpq6AjH4rP"
    );

    await user.click(screen.getByTestId("submit-button-card-match-result"));

    await waitFor(() => {
      expect(screen.getByText("Error adding match.")).toBeInTheDocument();
    });
  });
});
