import {CollectionConfig, Field} from "payload/types";

const Title:Field = {
    name: "title",
    label: "title",
    type: "text"
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
        group: "portfolio"
    },
    access: {
        read: () => true,
        create: () => true,
        delete: () => true,
        update:() => true,
    },
    fields: [
        {
            type: "tabs",
            tabs: [
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
                            // commissions/projects
                            type: "collapsible",
                            label: "projects",
                            fields: [
                                {
                                    type: "array",
                                    name: "commissions",
                                    fields: [
                                        Title,
                                        Duration
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
