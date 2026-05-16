export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Education', value: 'education' },
                    { title: 'Research', value: 'research' },
                    { title: 'Performance', value: 'performance' },
                ],
                layout: 'radio',
            },
        },
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
        },
        {
            name: 'year',
            title: 'Year',
            type: 'string',
        },
    ],
}
