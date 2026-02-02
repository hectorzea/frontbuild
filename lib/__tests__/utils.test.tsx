import { getSpotifyTrackUrl } from "@/lib/utils";

//TODO use this struct for future tests updates
describe("getSpotifyTrackUrl", () => {
  describe("when url is valid", () => {
    test("should return the spotify track id", () => {
      expect(
        getSpotifyTrackUrl(
          "https://open.spotify.com/track/4ya8lP9HLt2s6fj9xX4lSZ",
        ),
      ).toEqual("4ya8lP9HLt2s6fj9xX4lSZ");
    });
  });
  describe("when is an invalid url", () => {
    test("should return the spotify track id", () => {
      expect(getSpotifyTrackUrl("123")).toEqual(null);
    });
  });
});
