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
          spotifyUrl:
            "https://open.spotify.com/track/4ya8lP9HLt2s6fj9xX4lSZ?si=3JycucfyTRKqGkDUXIaTsw",
          artist: "Snade",
          whyILike: "Its nice and progressive song",
          coverImage: {
            filename: "cover1.jpg",
            alt: "cover",
          },
        },
      ],
    }),
  });
});

describe("Page Song By Id", () => {
  it("is rendering correctly", async () => {
    const paramsPromise = Promise.resolve({ id: "1" });
    render(await SongPage({ params: paramsPromise }));
    expect(screen.getByTestId("song-page-container")).toBeInTheDocument();
    expect(screen.getByTestId("song-whyILike")).toBeInTheDocument();
    expect(
      screen.getByText("Its nice and progressive song"),
    ).toBeInTheDocument();
  });
});
