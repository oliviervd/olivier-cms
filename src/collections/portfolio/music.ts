import {CollectionConfig} from "payload/types";

const Music:CollectionConfig = {
    slug: "music",
    admin: {
        useAsTitle: "title",
        group: "portfolio"
    },
    access: {
        read: () => true,
        create: () => true,
        delete: () => true,
        update:() => true,
    },
    fields:[
        {
            name: "title",
            label: "title",
            type: "text"
        },
        {
            type: "row",
            fields: [
                {
                    name: "year",
                    label: "year",
                    type: "text"
                },
                {
                    name:'project',
                    label:"project",
                    type: "relationship",
                    relationTo: "project"
                },
                {
                    name: "type",
                    label: "type",
                    type: "select",
                    options: ["personal", "commission"]
                }
            ]
        },

        {
            name:"audioFile",
            label:"audio file",
            type: "relationship",
            relationTo: "media"
        },
        {
            name: "tags",
            label: "tags",
            type: "select",
            hasMany: true,
            options: ["ambient", "electronic", "soundtrack"]
        },
        {
            name: "porfolio",
            label: "porfolio",
            type: "checkbox",
            admin: {
                position: "sidebar"
            }
        }
    ]
}
export default Music