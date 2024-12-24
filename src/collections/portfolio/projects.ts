import {CollectionConfig} from "payload/types";

const Project:CollectionConfig = {
    slug: "project",
    admin: {
        useAsTitle: "title",
        group: "portfolio"
    },
    access:{
        read: ()=>true,
        update: () =>true,
        create: ()=> true,
        delete: () => true
    },
    fields: [
        {
            type: "tabs",
            tabs: [
                {
                    label: "information",
                    fields: [
                        {
                            name: "title",
                            label:"title",
                            type: "text",
                            required: true
                        },
                        {
                            name: "brief",
                            label: "brief description",
                            type: "richText"
                        },
                        {
                            name: "description",
                            label: "description",
                            type: "richText"
                        },
                        {
                            type: "row",
                            fields: [
                                {
                                    name: "year",
                                    label: "year",
                                    type: "text"
                                },
                                {
                                    name: "dateStart",
                                    label: "date (start)",
                                    type: "date"
                                },
                                {
                                    name: "dateEnd",
                                    label: "date (end)",
                                    type: "date"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "media",
                    fields: [
                        {
                            name: "heroImage",
                            label: "hero",
                            type: "relationship",
                            relationTo: "media"
                        },
                        {
                            name: "mediaLink",
                            label: "external media (url)",
                            type: "text"
                        }
                    ]
                }
            ]
        },
        {
            name: "type",
            label: "type",
            type: "select",
            admin: {
                position: "sidebar"
            },
            options: [
                "music",
                "curatorial",
                "coding"
            ]
        },
        {
            type: "row",
            admin: {
                position: "sidebar"
            },
            fields: [
                {
                    name: "cv",
                    label: "cv",
                    type: "checkbox",
                    defaultValue: false
                },
                {
                    name: "home",
                    label: "home",
                    type: "checkbox",
                    defaultValue: false
                }
            ]
        },
        {
            name: 'URI',
            type: "text",
            unique: true,
            admin: {
                position: 'sidebar'
            }
        }
    ],
}
export  default Project