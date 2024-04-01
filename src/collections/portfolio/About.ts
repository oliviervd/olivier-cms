import {CollectionConfig} from "payload/types";
import {row} from "payload/dist/fields/config/schema";

const Global:CollectionConfig = {
    slug: "about",
    admin: {
        group: "portfolio",
    },
    access: {
        read: ()=>true,
        update: () =>true,
        create: ()=> true,
        delete: () => true
    },
    fields: [
        {
          name: "bio",
          label: "bio",
          type: "richText"
        },
        {
            type: "array",
            label: "reading now",
            name: "readingNow",
            fields: [
                {
                    type: "row",
                    fields: [
                        {
                            label: "title",
                            name: "title",
                            type: "text",
                            required: true
                        },
                        {
                            label: "url",
                            name: "url",
                            type: "text",
                            required: true
                        }
                    ]
                }
            ]
        },
        {
            label: "headshot",
            name: "headshot",
            type: "relationship",
            relationTo: "media"
        }
    ]
}
export default Global