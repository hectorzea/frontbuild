import { ModeToggle } from ".";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("Loads <ModeToggle /> and navigates and test next router mock", async () => {
  const user = userEvent.setup();
  render(<ModeToggle />);

  await user.click(screen.getByTestId("lang-nav-trigger"));

  expect(screen.getByTestId("es-lang-option")).toBeInTheDocument();
  expect(screen.getByTestId("en-lang-option")).toBeInTheDocument();
});
