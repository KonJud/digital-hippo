// Importation des modules nécessaires
import { buildConfig } from "payload/config"; // Importe la fonction de construction de configuration de Payload
import { webpackBundler } from "@payloadcms/bundler-webpack"; // Importe le bundler webpack de Payload
import { mongooseAdapter } from "@payloadcms/db-mongodb"; 
import { slateEditor } from "@payloadcms/richtext-slate"; 
import path from "path"; 
import { Users } from "./collections/Users";
import dotenv from 'dotenv'

dotenv.config({
    path: path.resolve(__dirname, '../.env')
})

export default buildConfig ({

    collections: [Users],
    routes: {
        admin: '/sell',
    },
    
    admin: {
        user: 'users',
        bundler: webpackBundler(),
        meta: {
            titleSuffix: '- DigitalHippo',
            favicon: '/favicon.ico',
            ogImage: '/thumbnail.jpg',
        },
    },
    
    rateLimit: {
        max: 2000,
    },

    editor: slateEditor({}),

    db: mongooseAdapter({
        url: process.env.MONGODB_URL!,
    }),

    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    }
})

