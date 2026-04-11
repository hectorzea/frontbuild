import { CollectionConfig } from "payload";

export const Admins: CollectionConfig = {
  //slug name for mongodb collection
  slug: "admins",
  auth: true, // this to handle user / password
  admin: {
    useAsTitle: "email",
  },
  fields: [
    // values for user / admins creation
    {
      name: "role",
      type: "select",
      options: ["super-admin", "editor"],
      defaultValue: "editor",
    },
  ],
};
