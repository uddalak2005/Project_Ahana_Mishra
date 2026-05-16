export default {
    name: 'education',
    title: 'Education',
    type: 'document',

    fields: [
        {
            name: 'degree',
            title: 'Degree',
            type: 'string',
        },
        {
            name: 'field',
            title: 'Field',
            type: 'string',
        },
        {
            name: 'institution',
            title: 'Institution',
            type: 'string',
        },
        {
            name: 'yearStart',
            title: 'Start Year',
            type: 'string',
        },
        {
            name: 'yearEnd',
            title: 'End Year',
            type: 'string',
        },
        {
            name: 'artwork',
            title: 'Artwork',
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ],

    preview: {
        select: {
            title: 'degree',
            subtitle: 'institution',
            media: 'artwork',
        },
    },
}