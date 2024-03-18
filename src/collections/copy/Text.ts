import {CollectionConfig} from "payload/types";
import RichText from "../blocks/Text";

const Text:CollectionConfig = {
    slug: "text",
    admin: {
        group:"copy"
    },
    access:{
        read: ()=>true,
        update: () =>true,
        create: ()=> true,
        delete: () => true
    },
    fields: [
        {
            // type of text
            label: "type",
            name: "type",
            type: "select",
            options: [
                "about",
                "article",
                "cv"
            ]
        },
        {
            name: 'layout', // required
            type: 'blocks', // required
            blocks: [
                // add required block here
                RichText,
            ]
        }
    ]

}
export default Text