// import React from "react";
// import { render, screen } from "@testing-library/react";
import MusicBlogPage from "../[locale]/projects/music-blog/page";

// describe("Music Blog Page", () => {
//   it("is rendering correctly", () => {
//     render(<MusicBlogPage />);
//     expect(screen.getByTestId("music-blog-page")).toBeInTheDocument();
//   });
// });

import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

test("Page", () => {
  render(<MusicBlogPage />);
  expect(screen.getByTestId("music-blog-page")).toBeDefined();

  // en jest es toBeInTheDocument
  // expect(
  //   screen.getByRole("heading", { level: 1, name: "Hi Blog" })
  // ).toBeDefined();
});
