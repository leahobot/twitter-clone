import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comments',
  title: 'Comments',
  type: 'document',
  fields: [
    defineField({
      name: 'comments',
      title: 'Comments',
      type: 'string',
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
      name: 'tweet',
      title: 'Tweet',
      description: 'Reference the tweet that the comment is associated to.',
      type: 'reference',
      to: [{type: 'tweet'}],
    }),
  ],
})
