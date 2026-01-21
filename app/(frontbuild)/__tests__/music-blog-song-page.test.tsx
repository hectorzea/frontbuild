import { render, screen } from "@testing-library/react";
import SongPage from "@/app/(music-blog)/songs/[id]/page";
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
    const paramsPromise = Promise.resolve({ id: "1" });
    render(await SongPage({ params: paramsPromise }));
    expect(screen.getByTestId("song-title")).toBeInTheDocument();
  });
});
