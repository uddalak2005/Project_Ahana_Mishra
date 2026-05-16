export default {
    name: 'achievements',
    title: 'Achievements',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Academic', value: 'academic' },
                    { title: 'Research', value: 'research' },
                    { title: 'Performance', value: 'performance' },
                    { title: 'Certification', value: 'certification' },
                ],
                layout: 'radio',
            },
        },
        {
            name: 'year',
            title: 'Year',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 4,
        },
        {
            name: 'image',
            title: 'Image (optional)',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
}
