import dotenv from 'dotenv'  // Importation du module 'dotenv'
import path from 'path'  // Importation du module 'path'
import type { InitOptions } from 'payload/config'  // Importation du type 'InitOptions' depuis 'payload/config'
import payload from 'payload'  // Importation du module 'payload'

dotenv.config({  // Configuration de dotenv pour charger les variables d'environnement à partir d'un fichier
    path: path.resolve(__dirname, '../.env')  // Résolution du chemin vers le fichier .env
})

let cached = (global as any).payload  // Initialisation d'une variable 'cached' depuis la portée globale

if (!cached) {  // Vérification si 'cached' est faux
    cached = (global as any).payload = {  // Assignation d'un objet à 'cached' dans la portée globale
        client: null,  // Initialisation de la propriété 'client' à null
        promise: null,  // Initialisation de la propriété 'promise' à null
    }
}

interface Args {  // Définition d'une interface 'Args'
    initOptions?: Partial<InitOptions>  // Déclaration d'une propriété optionnelle 'initOptions' de type 'Partial<InitOptions>'
}

export const getPayloadClient = async ({  // Exportation d'une fonction asynchrone 'getPayloadClient' avec un argument destructuré 'initOptions'
    initOptions  // Destructuration de 'initOptions' depuis l'argument
}: Args = {}) => {  // Attribution d'un objet vide comme valeur par défaut à 'Args' si aucun argument n'est fourni
    if (!process.env.PAYLOAD_SECRET) {  // Vérification si la variable d'environnement 'PAYLOAD_SECRET' n'est pas définie
        throw new Error("PAYLOAD_SECRET is missing")  // Lancement d'une erreur si 'PAYLOAD_SECRET' est manquant
    }

    if (cached.client) {  // Vérification si 'cached.client' est vrai
        return cached.client  // Retour de 'cached.client'
    }

    if (!cached.promise) {  // Vérification si 'cached.promise' est faux
        cached.promise = payload.init({  // Initialisation de 'cached.promise' avec le résultat de 'payload.init'
            secret: process.env.PAYLOAD_SECRET,  // Passage de 'PAYLOAD_SECRET' en tant que 'secret'
            local: initOptions?.express ? false : true,  // Réglage de 'local' en fonction de 'initOptions.express'
            ...(initOptions || {}),  // Fusion de 'initOptions' avec un objet vide
        })
    }

    try {  // Début d'un bloc try
        cached.client = await cached.promise  // Attribution du résultat de 'cached.promise' à 'cached.client' après l'attente
    } catch (e: unknown) {  // Capture d'une erreur inconnue et attribution à 'e'
        cached.promise = null  // Réinitialisation de 'cached.promise' à null
        throw e  // Lancement de l'erreur 'e'
    }

    return cached.client  // Retour de 'cached.client'
}

// Ce code permet de définir une fonction asynchrone nommée getPayloadClient qui récupère un client de la bibliothèque payload. Avant d'initialiser le client, le code vérifie si les variables d'environnement nécessaires sont définies, et utilise un mécanisme de mise en cache pour éviter de réinitialiser le client à chaque appel.