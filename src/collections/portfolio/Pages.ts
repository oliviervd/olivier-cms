import {CollectionConfig} from "payload/types";

const Pages:CollectionConfig = {
    slug: "page",
    admin: {
        group: "portfolio",
    },
    access: {
        read: () => true,
        create: () => true,
        delete: () => true,
        update:() => true,
    },
    fields: [
        {
          name: "title",
          label: "title",
          type: "text"
        },
        {
            type: "array",
            name: "content",
            fields: [
                {
                    name: "content",
                    label: "content",
                    admin: {
                        description: "select both content to be view, and its order from other collections"
                    },
                    type: "relationship",
                    relationTo: "project"
                }
            ]
        }
    ]
}
export default Pages