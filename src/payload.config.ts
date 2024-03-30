import path from 'path'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'
import {cloudStorage} from "@payloadcms/plugin-cloud-storage";
import {s3Adapter} from "@payloadcms/plugin-cloud-storage/s3";

import Users from './collections/globals/Users'
import Media from './collections/globals/Media'
import Globals from "./collections/globals/Globals";
import Text from "./collections/copy/Text";
import Project from "./collections/music/projects";



export default buildConfig({
  //adapter for cloud storage
  plugins: [
    cloudStorage({
      collections: {
        media: {
          adapter: s3Adapter({
            config: {
              endpoint: process.env.S3_ENDPOINT,
              region: process.env.S3_REGION,
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID,
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
              },
            },
            bucket: process.env.S3_BUCKET,
          }),
          // https://d3b71b8mgnztvw.cloudfront.net - cloudfront
          generateFileURL: ({ filename, prefix }) => {
            return ["https://d3b71b8mgnztvw.cloudfront.net", prefix, filename]
                .filter(Boolean)
                .join("/");
          },
        },
      },
    }),
  ],

  // adapter for mongoDB
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Media, Globals, Text, Project],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  cors:["http://localhost:5173","https://www.oliviervandhuynslager.net"],
  csrf:["http://localhost:5173","https://www.oliviervandhuynslager.net"],
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  }
})
