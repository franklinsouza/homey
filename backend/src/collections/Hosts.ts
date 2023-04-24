import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Hosts: CollectionConfig = {
  slug: 'hosts',
  admin: {
    useAsTitle: 'email',
    group: 'Users'
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'owner',
      type: 'relationship',
      relationTo: 'customers'
    },
    {
      label: 'Username',
      name: 'username',
      type: 'text',
      required: true
    },
    {
      label: 'Title',
      name: 'title',
      type: 'text',
      required: true
    },
    {
      label: 'Address',
      name: 'address',
      type: 'text',
      required: true
    },
    {
      label: 'Bedrooms',
      name: 'bedrooms',
      type: 'number',
      required: true
    },
    {
      label: 'Type',
      name: 'type',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Apartament',
          value: 'apartament'
        },
        {
          label: 'House',
          value: 'house'
        }
      ]
    }
  ],
}

export default Hosts;