import { CollectionConfig } from "payload";

export const Songs: CollectionConfig = {
  slug: "songs",
  fields: [
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "songTitle",
      type: "text",
      required: true,
    },
    {
      name: "artist",
      type: "text",
      required: true,
    },
    {
      name: "spotifyUrl",
      type: "text",
      //   TODO check dps this
      //   validate: (value: string): string => {
      //     if (value && !value.includes("spotify.com")) {
      //       return "Debe ser un link de Spotify";
      //     }
      //     return true;
      //   },
    },
    {
      name: "whyILike",
      type: "text",
      required: true,
    },
    {
      name: "likes",
      type: "number",
      defaultValue: 0,
      admin: {
        readOnly: true, // No editable desde el admin
      },
    },
  ],
};
