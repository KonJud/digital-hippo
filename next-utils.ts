import next from "next";  // Importation du module 'next'

const PORT = Number(process.env.PORT) || 3000  // Définition de la constante 'PORT' en récupérant la valeur de 'process.env.PORT' ou en utilisant 3000 par défaut

export const nextApp = next({  // Exportation de la constante 'nextApp' qui est initialisée avec les options passées à la fonction 'next'
    dev: process.env.NODE_ENV !== "production",  // Utilisation de l'environnement pour déterminer si l'application est en mode développement
    port: PORT  // Utilisation de la constante 'PORT' comme port pour l'application
})

export const nextHandler = nextApp.getRequestHandler()  // Exportation de la constante 'nextHandler' qui récupère le gestionnaire de requêtes de 'nextApp'