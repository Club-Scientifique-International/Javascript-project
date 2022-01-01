var readlineSync = require('readline-sync');
 
var Name = readlineSync.question('Quel est votre nom ?');
console.log('Bonjour ' + Name + '!');
 
var favAnimals = readlineSync.question("Quel est votre animal preferer ? ");
console.log("C'est bien " + Name + ' vous aimez les ' + favAnimals + ' !');


// La fonction stringify, permet de convertir une valeur en chaîne JSON en une chaine de caractère (texte = string)
let questions = JSON.stringify([ Name, favAnimals])

// On charge le module fs pour filesystem (système de fichiers)
// qui va permettre de charger et sauvegarder des fichiers
const fs = require("fs")

// On récupère le nom du fichier de sauvegarde par le biais de notre module de constantes:
const constantes = require('./constantes')

// On écrit toujours dans un fichier des chaines de caractères (string)
fs.writeFileSync(constantes.question, questions)


