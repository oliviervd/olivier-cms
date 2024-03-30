import {CollectionConfig} from "payload/types";

const About:CollectionConfig = {
    slug: "about",
    admin: {
        group: "porfolio",
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
                    label: "title",
                    name: "title",
                    type: "text",
                    required: true
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
export default About