import { getPayload } from "payload";
import configPromise from "@payload-config";
import Image from "next/image";
import Link from "next/link";
import { Media } from "@/payload-types";

const getMockSongs = () => ({
  docs: [
    {
      id: "1",
      songTitle: "Atrevete",
      artist: "Calle 13",
      coverImage: {
        alt: "picture",
        filename: "song.mp3",
      },
    },
  ],
});

export default async function SongsPage() {
  let songs;
  if (process.env.NEXT_PUBLIC_IS_E2E === "true") {
    songs = getMockSongs();
  } else {
    // Si es desarrollo normal o producción, usamos la BD real
    const payload = await getPayload({ config: configPromise });
    songs = await payload.find({
      collection: "songs",
    });
  }

  return (
    <div data-testid="music-blog-page" className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl text-center md:text-left">
        My Most Favorite Songs
      </h1>
      <div className="flex flex-col items-center md:flex-row md:flex-wrap gap-5">
        {songs.docs?.map((song) => {
          const coverImage = song.coverImage as Media;
          const altImage = coverImage.alt ? coverImage.alt : "no-picture";
          return (
            <div className="flex flex-col gap-2" key={song.id}>
              <Image
                src={`${coverImage ? `/media/${coverImage.filename}` : `/media/no-picture.jpg`}`}
                width={200}
                height={200}
                alt={altImage}
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
          );
        })}
      </div>
    </div>
  );
}
