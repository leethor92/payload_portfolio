import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',

  label: 'Site Settings',

  admin: {
    group: 'Portfolio',
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      defaultValue: 'Lee Thornton',
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      defaultValue: 'Software Engineer',
    },
    {
      name: 'availability',
      type: 'text',
      defaultValue: 'Available for new opportunities',
    },
    {
      name: 'heroHeadline',
      type: 'text',
      required: true,
      defaultValue:
        'Building scalable software from backend systems to modern web platforms.',
    },
    {
      name: 'heroDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'github',
      type: 'text',
      defaultValue: 'https://github.com/leethor92',
    },
    {
      name: 'linkedin',
      type: 'text',
    },
    {
      name: 'yearsExperience',
      type: 'number',
      required: true,
      defaultValue: 7,
    },
    {
      name: 'sitesModernised',
      type: 'number',
      defaultValue: 18,
    },
    {
      name: 'technologiesUsed',
      type: 'number',
      defaultValue: 30,
    },
  ],
}