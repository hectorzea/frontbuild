import { render, screen, waitFor } from "@testing-library/react";
import { HearthstoneCardSearchForm } from ".";
import userEvent from "@testing-library/user-event";

test("Render <HearthstoneCardSearchForm /> and find a card", async () => {
  const user = userEvent.setup();
  render(<HearthstoneCardSearchForm />);

  const input = screen.getByTestId("card-search-input-field");
  expect(
    screen.getByTestId("submit-button-card-search-form")
  ).toBeInTheDocument();

  await user.type(input, "ragnaros the firelord");

  await user.click(screen.getByTestId("submit-button-card-search-form"));

  await waitFor(() => {
    expect(screen.getByText("Your card")).toBeInTheDocument();
  });
});
