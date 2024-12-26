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
        mimeTypes: ["image/*", "audio/*"],
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'centre',
            },
            {
                name: 'card',
                width: 768,
                height: 1024,
                position: 'centre',
            },
            {
                name: 'tablet',
                width: 1024,
                height: undefined,
                position: 'centre',
            },
        ],
        adminThumbnail: 'thumbnail',

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