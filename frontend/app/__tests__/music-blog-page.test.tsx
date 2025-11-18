import React from "react";
import { render, screen } from "@testing-library/react";
import MusicBlogPage from "../[locale]/projects/music-blog/page";

describe("Music Blog Page", () => {
  it("is rendering correctly", () => {
    render(<MusicBlogPage />);
    expect(screen.getByTestId("music-blog-page")).toBeInTheDocument();
  });
});
