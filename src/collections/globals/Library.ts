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
                        "name": doc.author,
                        "url": doc.authorWebsite || null,
                    },
                    "isbn": doc.isbn || null,
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
            type:'row',
            fields: [
                {
                    name: "publisher",
                    label: "publisher",
                    type: "text"
                },
                {
                    name:"datePublished",
                    label: "date publisher",
                    type: "date",
                    admin: {
                        date: {
                            pickerAppearance: "dayOnly"
                        }
                    }
                }
            ]
        },
        {
            name:"url",
            label:"url",
            type: "text",
        },
        {
            type: "row",
            admin: {
              position: "sidebar"
            },
            fields: [
                {
                    name: "type",
                    label: "type",
                    type: "select",
                    options: [
                        "fiction",
                        "non-fiction"
                    ]
                },
                {
                    name:"pages",
                    label: "pages",
                    type: "number"
                }
            ]
        },
        {
            name: "category",
            label: "categories",
            type: "select",
            hasMany: true,
            options: [
                "art",
                "design",
                "graphic design",
                "exhibition catalogue",
                "museology",
                "computation",
                "AI",
                "ecology",
                "philosophy",
                "architecture",
                "theory",
                "history",
                "feminism",
                "science-fiction"
            ],
            admin: {
                position: "sidebar"
            }
        },
        {
          type: "row",
          admin: {
              position: "sidebar"
          },
          fields: [
              {
                  name: "reading",
                  label: "reading",
                  type: "checkbox",
              }
          ]
        },
        {
            name: "isbn",
            type: "text",
            unique: true,
            admin: {
                position: 'sidebar'
            }
        }

    ]
}
export default Library