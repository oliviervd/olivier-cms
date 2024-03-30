import {CollectionConfig} from "payload/types";

const Project:CollectionConfig = {
    slug: "project",
    access:{
        read: ()=>true,
        update: () =>true,
        create: ()=> true,
        delete: () => true
    },
    fields: [
        {
            type: "tabs",
            tabs: [
                {
                    label: "information",
                    fields: [
                        {
                            name: "title",
                            label:"title",
                            type: "text",
                            required: true
                        },
                        {
                            name: "description",
                            label: "description",
                            type: "richText"
                        }
                    ]
                },
                {
                    label: "media",
                    fields: [
                        {
                            name: "heroImage",
                            label: "hero",
                            type: "relationship",
                            relationTo: "media"
                        }
                    ]
                }
            ]
        },
        {
            name: "cv",
            label: "cv",
            admin: {
                position: "sidebar"
            },
            type: "checkbox"
        }
    ]
}
export  default Project