import {CollectionConfig} from "payload/types";

const Project:CollectionConfig = {
    slug: "project",
    admin: {
        useAsTitle: "title"
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
                        }
                    ]
                }
            ]
        },
        {
            name: "cv",
            label: "cv",
            admin: {
                position: "sidebar"
            },
            type: "checkbox"
        }
    ]
}
export  default Project