import { getPayload } from "payload";
import configPromise from "@payload-config";
import Image from "next/image";
import Link from "next/link";

export default async function SongsPage() {
  //TODO FINISH ui on mobile, find a way to share common folder for css / shadcn, now we getting globals from frontbuild
  const payload = await getPayload({ config: configPromise });
  const songs = await payload.find({
    collection: "songs",
  });
  return (
    <div data-testid="music-blog-page" className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl">My Most Favorite Songs</h1>
      <div className="flex gap-5">
        {songs.docs?.map((song) => (
          <div className="flex flex-col gap-2" key={song.id}>
            <Image
              src={`${song.coverImage ? `/media/${song.coverImage.filename}` : `/media/no-picture.jpg`}`}
              width={200}
              height={200}
              alt={song.coverImage ? song.coverImage.alt : "No picture"}
              className="rounded-sm"
            />
            <p>{song.songTitle}</p>
            <p>{song.artist}</p>
            <Link href={`/songs/${song.id}`}>Go to hear this song</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
