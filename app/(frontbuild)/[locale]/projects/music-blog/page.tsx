import { getPayload } from "payload";
import configPromise from "@payload-config";
import Image from "next/image";

//TODO: Find about SSG + Payload CMS
export default async function MusicBlogPage() {
  const payload = await getPayload({ config: configPromise });
  const songs = await payload.find({
    collection: "songs",
    //TODO in depth soon
    // depth: 1,
    // limit: 12,
    // overrideAccess: false,
    // select: {
    //   title: true,
    //   slug: true,
    //   categories: true,
    //   meta: true,
    // },
  });
  return (
    <div data-testid="music-blog-page" className="flex flex-col gap-5 p-5">
      <p>My Most Favorite Songs</p>
      <div className="flex gap-5">
        {songs.docs?.map((song) => (
          <div className="flex flex-col gap-2" key={song.id}>
            <Image
              src={`/media/${song.coverImage.filename}`}
              width={200}
              height={200}
              alt={song.coverImage.alt}
              className="rounded-sm"
            />
            <p>{song.songTitle}</p>
            <p>{song.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
