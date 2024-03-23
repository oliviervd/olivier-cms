import {Block} from "payload/types";

const Title:Block = {
    slug:"title",
    fields: [
        {
            // type of title (h1, h2, h3, ... )
            name: 'type',
            label: 'type',
            type: "select",
            options: ["H2, H3"]
        },
        {
            name: 'title',
            label: 'title',
            type: 'text'
        }
    ]
}

export default Title;