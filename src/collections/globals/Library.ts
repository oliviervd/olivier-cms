import {CollectionConfig} from "payload/types";

const Library:CollectionConfig = {
    slug: "library",
    admin: {
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
            name:"url",
            label:"url",
            type: "text",
        }
    ]
}
export default Library