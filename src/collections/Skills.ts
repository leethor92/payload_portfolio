import type { CollectionConfig } from 'payload'

export const Skills: CollectionConfig = {
  slug: 'skills',

  admin: {
    group: 'Portfolio',
    useAsTitle: 'category',
    defaultColumns: ['category', 'order'],
  },

  defaultSort: 'order',

  fields: [
    {
      name: 'category',
      type: 'text',
      required: true,
    },
    {
      name: 'icon',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Monitor',
          value: 'monitor',
        },
        {
          label: 'Code',
          value: 'code',
        },
        {
          label: 'Cloud',
          value: 'cloud',
        },
        {
          label: 'Database',
          value: 'database',
        },
        {
          label: 'Tools',
          value: 'tools',
        },
        {
          label: 'Testing',
          value: 'testing',
        },
      ],
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,

      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 0,

      admin: {
        description:
          'Controls the order this category appears on the portfolio.',
      },
    },
  ],
}