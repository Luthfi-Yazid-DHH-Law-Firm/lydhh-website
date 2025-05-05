import {StarIcon} from '@sanity/icons';
import {defineArrayMember, defineField, defineType} from 'sanity';

export const testimonialType = defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    icon: StarIcon,
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'company',
            type: 'string',
        }),
        defineField({
            name: 'position',
            type: 'string',
        }),
        defineField({
            name: 'image',
            type: 'image',
        }),
        defineField({
            name: 'testimony',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'block',
                    styles: [{title: 'Normal', value: 'Normal'}],
                    lists: [],
                })
            ]
        })
    ],
    preview: {
        select: {
            name: 'name',
            testimony: 'testimony',
            media: 'image',
        }
    }
});