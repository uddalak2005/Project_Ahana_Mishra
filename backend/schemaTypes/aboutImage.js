export default {
    name: "aboutImage",
    title: "About Image",
    type: "document",
    fields: [
        {
            name: "aboutImage",
            title: "About Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "altText",
            title: "Alt Text",
            type: "string",
            description: "Describe the image for accessibility",
        },
    ],
    __experimental_actions: ['update', 'publish'],
};