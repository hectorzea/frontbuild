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
