import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Customers: CollectionConfig = {
  slug: 'customers',
  admin: {
    useAsTitle: 'email',
    group: 'Users'
  },
  access: {
    read: () => true,
    create: () => true,
  },
  auth: {
    tokenExpiration: 7200, // How many seconds to keep the user logged in
    //tokenExpiration: 60,
    //verify: false, // Require email verification before being allowed to authenticate
    //maxLoginAttempts: 5, // Automatically lock a user out after X amount of failed logins
    //lockTime: 600 * 1000, // Time period to allow the max login attempts
    // More options are available
  },
  fields: [
    {
      label: 'Username',
      name: 'username',
      type: 'text',
    },
    {
      label: 'type',
      name: 'typeOption',
      type: 'select',
      options: [
        {
          label: 'I want to book',
          value: 'book'
        },
        {
          label: 'I want to host',
          value: 'host'
        }
        
      ],
    }
  ],
}

export default Customers;