export default {
  name: "chef",
  title: "Chef",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Chef's Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      title: "Bio",
      type: "array",

      of: [
        //this of field turns array into a rich text editor
        //can be used to query!!!
        {
          title: "Block",
          type: "block",
          styles: [
            {
              title: "Normal",
              value: "normal",
            },
          ],
        },
      ],
    },
  ],
};
