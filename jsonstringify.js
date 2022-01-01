/*
Pour lancer ce programme:
* Aller dans terminal
* Aller dans le répertoire js:
  cd js
* Lancer le programme avec nodejs:
  node.exe jsonstringify.js
  
*/

var objet = {
    nombre: 3, // type = number
    liste: ["hello", "espace", "bonjour"], // type = array
    str: "Coucou les copains!" // type = string
} // type = object


// on simule la modification de l'objet par le programme en mémoire
objet.nombre = 10
objet.str += " Et bonne année!"

// La fonction stringify, permet de convertir une valeur en chaîne JSON en une chaine de caractère (texte = string)
let chaine_de_caracteres = JSON.stringify( objet )

// On charge le module fs pour filesystem (système de fichiers)
// qui va permettre de charger et sauvegarder des fichiers
const fs = require("fs")

// On récupère le nom du fichier de sauvegarde par le biais de notre module de constantes:
const constantes = require('./constantes')

// On écrit toujours dans une fichier des chaines de caractères (string)
fs.writeFileSync(constantes.nom_fichier, chaine_de_caracteres)


