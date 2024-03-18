import {Block} from "payload/types";

const RichText:Block = {
    slug: "richRext",
    fields: [
        {
            // type of text
            label: "type",
            name: "type",
            type: "select",
            options: [
                "about",
                "article"
            ]
        },
        {
            // actual text
            label:"text",
            name: "text",
            type: "richText"
        }
    ]
}
export default RichText