export default {
    name: 'heroImage',
    title: 'Hero Image',
    type: 'document',
    fields: [
        {
            name: 'heroImageLeft',
            title: 'Hero Image Left',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'heroImageRight',
            title: 'Hero Image Right',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'altText',
            title: 'Alt Text',
            type: 'string',
            description: 'Describe the image for accessibility',
        },
    ],
    // Singleton: Only one document allowed
    __experimental_actions: ['update', 'publish'],
}