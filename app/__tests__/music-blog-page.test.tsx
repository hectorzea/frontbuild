import MusicBlogPage from "../[locale]/projects/music-blog/page";
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
