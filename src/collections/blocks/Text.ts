import {Block} from "payload/types";

const RichText:Block = {
    slug: "richRext",
    fields: [
        {
            // actual text
            label:"text",
            name: "text",
            type: "richText"
        }
    ]
}
export default RichText