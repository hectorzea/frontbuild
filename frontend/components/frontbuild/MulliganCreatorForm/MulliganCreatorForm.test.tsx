import React from "react";
import { screen } from "@testing-library/react";
import { MulliganCreatorForm } from ".";
import { renderWithProviders } from "@/app/test-utils";
import ModalWrapper from "../Modal/ModalWrapper";

test("Loads <TaskForm /> and check for main elements", async () => {
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
});
