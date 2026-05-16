export default {
    name: 'publications',
    title: 'Publications',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Paper Title',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'authors',
            title: 'Authors',
            type: 'string',
            description: 'Example: Oindri X, John Y',
        },
        {
            name: 'journal',
            title: 'Journal / Conference',
            type: 'string',
        },
        {
            name: 'year',
            title: 'Year',
            type: 'string',
        },
        {
            name: 'abstract',
            title: 'Abstract / Description',
            type: 'text',
            rows: 5,
        },
        {
            name: 'paperLink',
            title: 'Paper Link',
            type: 'url',
        },
        {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
}
