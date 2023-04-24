import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Customers from './collections/Customers';
import Hosts from './collections/Hosts';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  cors: ["http://localhost:5173"],
  csrf: ["http://localhost:5173"],
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Customers,
    Hosts
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
