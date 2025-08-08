import React from "react";
import { screen } from "@testing-library/react";
import { MulliganCreatorForm } from ".";
import { renderWithProviders } from "@/app/test-utils";
import ModalWrapper from "../Modal/ModalWrapper";
import userEvent from "@testing-library/user-event";

test("Loads <MulliganCreatorForm /> check elements and create a match", async () => {
  const user = userEvent.setup();
  renderWithProviders(
    <ModalWrapper route={"route"}>
      <MulliganCreatorForm />
    </ModalWrapper>,
    {
      preloadedState: {},
    }
  );
  expect(
    await screen.findByTestId("card-match-url-input-field")
  ).toBeInTheDocument();
  expect(await screen.findByTestId("switch-win-loose")).toBeInTheDocument();
  expect(
    await screen.findByTestId("submit-button-card-match-result")
  ).toBeInTheDocument();
  expect(
    await screen.findByTestId("close-button-card-match-form")
  ).toBeInTheDocument();

  const input = screen.getByTestId("card-match-url-input-field");

  await user.type(input, "https://hsreplay.net/replay/UEpCuDvFktfgBpq6AjH4rP");

  await user.click(screen.getByTestId("submit-button-card-match-result"));
});
