import { render, screen } from "@testing-library/react";
import SongsPage from "@/app/(music-blog)/songs/page";
import { getPayload } from "payload";

beforeEach(() => {
  (getPayload as jest.Mock).mockResolvedValue({
    find: jest.fn().mockResolvedValue({
      docs: [
        {
          id: "1",
          songTitle: "Crystal Glow",
          artist: "Snade",
          coverImage: {
            filename: "cover1.jpg",
            alt: "cover",
          },
        },
        {
          id: "2",
          songTitle: "Angel",
          artist: "Belinda",
          coverImage: {
            filename: "cover2.jpg",
            alt: "cover-beli",
          },
        },
      ],
    }),
  });
});

describe("Music Blog Page", () => {
  it("is rendering correctly", async () => {
    render(await SongsPage());
    expect(screen.getByTestId("music-blog-page")).toBeInTheDocument();
  });
});
