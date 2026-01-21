import { getPayload } from "payload";
import configPromise from "@payload-config";

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
  const song = await payload.find({
    collection: "songs",
    where: { id: { equals: id } },
    limit: 1,
  });
  return <div data-testid="song-title">{song.docs[0]?.songTitle}</div>;
}
