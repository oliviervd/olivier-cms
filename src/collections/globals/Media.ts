import {CollectionConfig} from "payload/types";

const Media:CollectionConfig = {
    slug: 'media',
    admin: {
        useAsTitle: 'title',
        group: "globals"
    },
    upload: {
        staticURL: "/media",
        staticDir: "/media",
        disableLocalStorage: true,
        // todo: add admin thumbnail
        mimeTypes: ["image/*", "audio/*"]
    },
    access: {
        read: () => true,
        create: () => true,
        delete: () => true,
        update:() => true,
    },
    fields: [
        {
            name: 'title',
            type: "text"
        },
        {
            name: 'alt',
            type: "text"
        }
    ]
}

export default Media