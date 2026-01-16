// import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";
import { Songs } from "./collections/Songs";

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [Songs],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || "",
  //TODO: ver como manejar diferentes entornos
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || "",
  }),
  //TODO volver a usar sharp para media collection
});
