# forum_front

Ce projet a été créé à l'aide [Create React App](https://github.com/facebook/create-react-app).

Pour lancer le projet, il faut taper la commande :

### `yarn start`

L'application ouvre un onglet sur votre navigateur pour y accéder.


## Choix 

### Architecture

J'ai choisi d'organiser mes composants de la manière suivante :
 * X
    * index.js
    * X.js
    * X.scss
    * XContainer.js
   
  XContainer.js est mon Smart Component, il s'occupe de la logique business du composant 
  et délègue l'affichage à X.js qui est mon Dumb Component.
  
  X.scss est mon fichier Sass pour mon component X.
  
 
### Endpoint

Pour les composants PostDetails et UserDetails, j'ai choisi d'utiliser, pour la performance, l'URL:

   ### `https://jsonplaceholder.typicode.com/users?:id`
   
Si l'endpoint n'était pas accessible, j'aurais filtré la liste des users sur leur id comme pour Posts.


### Barre de Navigation

J'ai choisi d'ajouter une barre de navigation pour naviguer plus facilement dans le projet. De plus,
si la liste des utilisateurs devenait une feature, il serait plus simple d'y accéder grâce à la barre de
navigation. 

## Axes d'amélioration

J'aurais pu améliorer mon Prettier en ajoutant d'avantage de règles pour harmoniser mon code.
Par exemple avec :
* Print Width, pour la largeur du fichier
* Tab Width, pour définir le nombre de tabulations
* ...

Le CSS avec plus de temps aurait pu être davantage poussé! 