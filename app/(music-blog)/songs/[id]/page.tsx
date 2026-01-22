import { getPayload } from "payload";
import configPromise from "@payload-config";
import { getSpotifyTrackUrl } from "@/lib/utils";

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const songs = await payload.find({
    collection: "songs",
    limit: 1000,
  });
  return songs.docs.map((song) => ({
    id: song.id,
  }));
}

export default async function SongPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const payload = await getPayload({ config: configPromise });
  const songCollection = await payload.find({
    collection: "songs",
    where: { id: { equals: id } },
    limit: 1,
  });
  const song = { ...songCollection.docs[0] };
  const spotifySongId = getSpotifyTrackUrl(song.spotifyUrl);
  return (
    <div
      data-testid="song-page-container"
      className="flex flex-col p-5 gap-5 justify-center items-center min-h-screen font-extralight"
    >
      <p className="text-2xl">Your song</p>
      <iframe
        className="w-[340px] h-[352px] rounded-xl"
        data-testid="embed-iframe-songs"
        src={`https://open.spotify.com/embed/track/${spotifySongId}`}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
      <p>Why i like this song?</p>
      <p>{song.whyILike}</p>
    </div>
  );
}
