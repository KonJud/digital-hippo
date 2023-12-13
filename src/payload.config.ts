// Importation des modules nécessaires
import { buildConfig } from "payload/config"; // Importe la fonction de construction de configuration de Payload
import { webpackBundler } from "@payloadcms/bundler-webpack"; // Importe le bundler webpack de Payload
import { mongooseAdapter } from "@payloadcms/db-mongodb"; // Importe l'adaptateur Mongoose pour MongoDB de Payload
import { slateEditor } from "@payloadcms/richtext-slate"; // Importe l'éditeur de texte riche Slate de Payload
import path from "path"; // Importe le module path de Node.js pour manipuler les chemins de fichiers

// Construction de la configuration de Payload
export default buildConfig ({
    // URL du serveur, récupérée depuis les variables d'environnement ou vide par défaut
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    // Tableau des collections (vides dans ce cas)
    collections: [],
    // Configuration des routes
    routes: {
        // Route de l'interface d'administration
        admin: '/sell',
    },
    // Configuration de l'interface d'administration
    admin: {
        // Utilisation du bundler webpack
        bundler: webpackBundler(),
        // Métadonnées pour l'interface d'administration
        meta: {
            // Suffixe du titre
            titleSuffix: '- DigitalHippo',
            // Icône de favori
            favicon: '/favicon.ico',
            // Image OpenGraph
            ogImage: '/thumbnail.jpg',
        },
    },
    // Limitation du taux de requêtes
    rateLimit: {
        // Maximum de requêtes (2000 dans ce cas)
        max: 2000,
    },
    // Configuration de l'éditeur de texte riche
    editor: slateEditor({}),
    // Configuration de la base de données
    db: mongooseAdapter({
        // URL de la base de données MongoDB, récupérée depuis les variables d'environnement
        url: process.env.MONGODB_URL!,
    }),
    // Configuration de TypeScript
    typescript: {
        // Chemin du fichier de sortie pour les types générés par Payload
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    }
})

//En résumé, ce code configure le framework Payload CMS pour votre application. Il définit l'URL du serveur, les collections, les routes, l'interface d'administration, la limitation du taux de requêtes, l'éditeur de texte riche, la base de données et la configuration TypeScript.