export default {
    name: 'contactInfo',
    title: 'Contact Info',
    type: 'document',

    // 🔒 Prevent multiple documents
    __experimental_actions: ['update', 'publish'],
    // disables: create, delete, duplicate

    fields: [
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: Rule => Rule.required().email()
        },
        {
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'platform',
                            title: 'Platform Name',
                            type: 'string',
                            validation: Rule => Rule.required()
                        },
                        {
                            name: 'url',
                            title: 'URL',
                            type: 'url',
                            validation: Rule => Rule.required()
                        }
                    ]
                }
            ]
        }
    ]
}
