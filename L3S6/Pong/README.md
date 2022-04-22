# Projet Pong

## **Auteur**

Nawfel Senoussi - Romain Morel

-------------------------------------
## **Présentation du TP**

Le but de ce projet est créer le célèbre jeu "Pong" en serveur.

-------------------------------------
## **HowTo**

### *Récupération du dépôt*

```
git clone https://gitlab-etu.fil.univ-lille1.fr/senoussin/senoussi_morel_jsfs.git
```

### *Commande de lancement du projet*

- Dans un terminal, dirigez vous dans le dossier server et lancez la commande suivante:

```
nodemon
```

- Puis dans un autre terminal, dirigez vous dans le dossier client et lancez la commande suivante:

```
npm run watch
```

- Vous pouvez enfin lancer le jeu en vous connectant via l'adresse suivante (il faut être 2 pour lancer la partie):

```
localhost:8085/public/index.html
```

Vous pouvez également jouer avec un de vos amis en lui demandant de se connecter via votre adresse ip, comme ceci:

```
VOTREADRESSEIP:8085/public/index.html
```

*N'hésitez pas à changer le port dans le fichier main.js si le port 8085 est déjà utilisé chez vous*


---------------------------------------

## Exercice 1 - Mise en place (v0) --> (Etat: Fini)

### Difficultés rencontrées

Aucune

---

## Exercice 2 - Webpack (v1) --> (Etat: Fini)

### Difficultés rencontrées

Aucune

---

## Exercice 3 - Seul face au mur (v2) --> (Etat: Fini)

### Commentaire

- Dans un premier temps, nous avons géré l'arrêt de la balle lors des buts dans la classe Ball car cela nous semblé plus rapide.

- On verra dans l'Exercice 4 que nous avons changé de manière de gérer les collisions avec les côtés (vertical) car cela nous semblait plus logique.

---

## Exercice 4 - Premier jeu à deux raquettes (v3) --> (Etat: Fini)

### Commentaire

- Nous avons choisi les commandes 'Z'(haut) et 'S'(bas) pour le mouvement de la deuxieme raquette.

- Nous avons donc ici choisi de gérer les "buts" dans la classe Game car nous nous sommes rendus compte que c'était mieux de laisser le jeu distribuer les points et dire à quel moment un but était valide.(La gestion des buts est donc dans la méthode moveAndDraw())

- Nous avons laissé la gestion des autres collisions dans la classe Ball (collision avec l'horizontal, collision avec les raquettes).

- Ce sont les paddles qui gagne des points (ajout donc de l'attribut 'score' dans la classe Paddle).

### Difficultés restant à resoudre

Aucune

---

## Exercice 5 - Version réseau (v4) --> (Etat: Fini)

### Commentaire

- La balle est toujours lancée par le joueur 1.
- Si il n'y a pas deux joueurs dans la partie, le bouton "play" n'est pas disponible (il le devient à la connexion du deuxième joueur).
- Tout joueur supplémentaire se voit refuser la connexion au serveur.
- La déconnexion d'un joueur déconnecte l'ensemble des joueurs.

### Difficultés rencontrées

- La balle a tendance à accelérer entre deux parties.
- Lorsque l'on joue entre deux PC, il y a beaucoup de désynchronisation, ce qui n'est pas le cas lorsque nous jouons sur deux pages sur le même PC (peut être dû à la connexion)

## Conclusion

- A l'aide de webpack nous avons vu qu'il était plus simple de travailler sur son projet.
- Nous avons revu l'utilisation des touches au clavier pour intéragir avec l'écran.
- Nous avons également revu l'interaction entre js et html.
- Nous avons appris à utiliser des sockets entre client et serveur afin d'avoir une interaction entre deux joueurs.

