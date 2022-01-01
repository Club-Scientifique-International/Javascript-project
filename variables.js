const color = {
    red: "#ff0000",
    green: "#00fe00",
    yellow: "",
    blue: "#000088",

}

// La fonction stringify, permet de convertir une valeur en chaîne JSON en une chaine de caractère (texte = string)
let couleurs = JSON.stringify( color )

// On charge le module fs pour filesystem (système de fichiers)
// qui va permettre de charger et sauvegarder des fichiers
const fs = require("fs")

// On récupère le nom du fichier de sauvegarde par le biais de notre module de constantes:
const constantes = require('./constantes')

// On écrit toujours dans une fichier des chaines de caractères (string)
fs.writeFileSync(constantes.nom_fichier, couleurs)


