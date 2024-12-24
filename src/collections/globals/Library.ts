import {CollectionConfig} from "payload/types";

const Library:CollectionConfig = {
    slug: "library",
    admin: {
        group: "collections",
        useAsTitle: "title",
    },
    access:{
        read: ()=>true,
        update: () =>true,
        create: ()=> true,
        delete: () => true
    },
    fields:[
        {
            name: "title",
            label: "title",
            type: "text",
            required:true
        },
        {
            name:"author",
            label:"author",
            type: "text",
        },
        {
            type: "row",
            fields: [
                {
                    label: "width",
                    name: "width",
                    type: "number"
                },
                {
                    label: "height",
                    name: "height",
                    type: "number"
                },
                {
                    label: "depth",
                    name: "depth",
                    type: "number"
                }
            ]
        },
        {
            name:"url",
            label:"url",
            type: "text",
        }
    ]
}
export default Library