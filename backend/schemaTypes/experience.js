export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title/Position',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'organization',
            title: 'Organization',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'yearStart',
            title: 'Year Start',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'yearEnd',
            title: 'Year End',
            type: 'string',
            initialValue: 'Present',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 4,
        },
        {
            name: 'type',
            title: 'Experience Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Research', value: 'research' },
                    { title: 'Teaching', value: 'teaching' },
                    { title: 'Clinical', value: 'clinical' },
                    { title: 'Performance', value: 'performance' },
                    { title: 'Volunteer', value: 'volunteer' },
                    { title: 'Other', value: 'other' },
                ],
                layout: 'radio',
            },
        },
    ],
}