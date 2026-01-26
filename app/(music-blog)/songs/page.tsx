import { getPayload } from "payload";
import configPromise from "@payload-config";
import Image from "next/image";
import Link from "next/link";

export default async function SongsPage() {
  //TODO FINISH  find a way to share common folder for css / shadcn, now we getting globals from frontbuild
  const payload = await getPayload({ config: configPromise });
  const songs = await payload.find({
    collection: "songs",
  });

  return (
    <div data-testid="music-blog-page" className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl text-center md:text-left">
        My Most Favorite Songs
      </h1>
      <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-5">
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
            <Link
              href={`/songs/${song.id}`}
              className="underline hover:text-gray-700 transition-all duration-300"
            >
              Go to hear this song
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
