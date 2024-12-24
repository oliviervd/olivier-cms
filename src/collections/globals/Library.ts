import {CollectionConfig} from "payload/types";

const Library:CollectionConfig = {
    slug: "book",
    hooks:{
        // generate Linked Data (JSON-LD)
        afterRead: [
            async ({ doc }) => {
                const jsonLDOverlay = {
                    "@context": "https://schema.org/",
                    "@type": "Book",
                    "name": doc.title,
                    "author": {
                        "@type": "Person",
                        "name": doc.author
                    }
                };
                return {
                    ...doc,
                    jsonLD: jsonLDOverlay
                }
            },

        ]
    },
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
            type: "row",
            fields: [
                {
                    name:"author",
                    label:"author",
                    type: "text",
                },
                {
                    name:"authorWebsite",
                    label:"author website",
                    type: "text",
                }
            ]
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
        },
        {
            name: "reading",
            label: "reading",
            type: "checkbox",
            admin: {
                position: "sidebar"
            }
        }
    ]
}
export default Library