import { screen, waitFor } from "@testing-library/react";
import { HearthstoneCardSearchForm } from ".";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "@/lib/test-utils";

test("Render <HearthstoneCardSearchForm /> and find a card", async () => {
  const user = userEvent.setup();
  renderWithProviders(<HearthstoneCardSearchForm />);

  const input = screen.getByTestId("card-search-input-field");
  expect(
    screen.getByTestId("submit-button-card-search-form"),
  ).toBeInTheDocument();

  await user.type(input, "ragnaros the firelord");

  await user.click(screen.getByTestId("submit-button-card-search-form"));

  await waitFor(() => {
    expect(
      screen.getByText(
        /Talanji was struck down and raised again as a death knight/i,
      ),
    ).toBeInTheDocument();
  });
});
