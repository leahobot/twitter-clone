import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField({
      name: 'banTweet',
      title: 'Ban Tweet',
      description: 'ADMIN CONTROLS: Toggle if tweet is deemed inappropriate',      
      type: 'boolean',
    }),
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile image',
      type: 'image',
      options: {
        hotspot: true},
    }),
    defineField({
      name: 'image',
      title: 'Tweet Image',
      type: 'array',
      of: [
        {type: 'image'}
      ],
    }),
  ],
})
