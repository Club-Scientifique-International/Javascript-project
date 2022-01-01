/*
Ce programme permet de récupérer le contenu de l'objet que l'on a sauvegardé
dans le fichier sauvegarde.json
*/

const fs = require('fs')

// On récupère le nom du fichier de sauvegarde par le biais de notre module de constantes:
const constantes = require('./constantes')

const texte_du_fichier = fs.readFileSync(constantes.nom_fichier)

// On a donc maintenant le contenu du fichier sous forme de texte,
// mais on veut accéder à la variable "str" stockée dans l'objet.
// Pour récupérer l'objet, il faut utiliser JSON.parse
const objet = JSON.parse(texte_du_fichier)

console.log(objet.str)