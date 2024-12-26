import {CollectionConfig, Field} from "payload/types";

const Title:Field = {
    type: "row",
    fields: [
        {
            name: "title",
            label: "title",
            type: "text"
        },
        {
            name: "display",
            label: "display",
            type: "checkbox",
            defaultValue: false
        }
    ]

}

const Organization:Field = {
    name: "organisation",
    label: "organisation",
    type: "text"
}

const Duration: Field = {
    type: "row",
    fields: [
        {
            name: "startDate",
            label: "start",
            type: "text"
        },
        {
            name: "endDate",
            label: "end",
            type: "text"
        }
    ]
}

const Resume:CollectionConfig = {
    slug: "resume",
    admin: {
        group: "portfolio",
        useAsTitle: "resumeTitle"
    },
    access: {
        read: () => true,
        create: () => true,
        delete: () => true,
        update:() => true,
    },
    fields: [
        {
            name: "resumeTitle",
            label: "resume title",
            type: "text",
        },
        {
            type: "tabs",
            tabs: [
                {
                    label: "text",
                    fields: [
                        {
                            name: "intro",
                            label: "intro",
                            type: "richText"
                        }
                    ]
                },
                {
                    label: "overview",
                    fields: [
                        {
                            // experience
                            type: "collapsible",
                            label: "experience",
                            fields: [
                                {
                                    type: "array",
                                    name: "experiences",
                                    fields: [
                                        Title,
                                        Organization,
                                        Duration,
                                    ]
                                }
                            ]
                        },
                        {
                            // education
                            type: "collapsible",
                            label: "education",
                            fields: [
                                {
                                    type: "array",
                                    name: "educations",
                                    fields: [
                                        Title,
                                        Organization,
                                        Duration,
                                    ]

                                }
                            ]
                        },
                        {
                            // teaching
                            type: "collapsible",
                            label: "teaching",
                            fields: [
                                Title,
                                Duration
                            ]
                        },
                        {
                            // commissions/projects
                            type: "collapsible",
                            label: "projects",
                            fields: [
                                {
                                    type: "array",
                                    name: "commissions",
                                    fields: [
                                        Title,
                                        Duration,
                                        {
                                            type: "relationship",
                                            name: "relatedProjects",
                                            label: "related projects",
                                            relationTo: "project"
                                        },
                                        {
                                            label: "type",
                                            name: "type",
                                            type: "select",
                                            options: ["curatorial", "web-dev", "music"]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
export default Resume;
