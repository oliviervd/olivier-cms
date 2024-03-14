import {CollectionConfig} from "payload/types";

const Globals:CollectionConfig = {
    slug: "globals",
    admin: {
        group: "globals"
    },
    access: {
        read: () => true,
        create: () => true,
        delete: () => true,
        update:() => true,
    },
    fields: [
        {
            name:"about",
            label: "about",
            type:"richText",
        }
    ]
}
export default Globals