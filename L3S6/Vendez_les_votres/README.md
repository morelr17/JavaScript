# Projet Vendez les vôtres

## **Auteur**

Nawfel Senoussi - Romain Morel

-------------------------------------
## **Présentation du TP**

Le but de ce projet est réalisé une application permettant de vendre des objets et de pouvoir les acheter via différents comptes

-------------------------------------
## **HowTo**

### *Récupération du dépôt*

```
git clone https://gitlab-etu.fil.univ-lille1.fr/senoussin/senoussi_morel_jsfs.git
```

-------------------------------------

### *Installation des modules indispensables*

```
npm install
```

-------------------------------------

### *Commande de lancement du projet*

Dans un premier temps dirigez vous dans le dossier server et créer un dossier dbData (il permettra de créer la base de données)

- Dans un terminal, dirigez vous dans le dossier server et lancez la commande suivante pour permettre de lancer le serveur mongodb:

```
mongod --dbpath dbData
```

- Dans un autre terminal, dirigez vous dans le dossier server et lancez la commande suivante:

```
npm run start
```

ou 

```
nodemon
```

- Vous pouvez enfin lancer l'application à l'aide du lien suivant:

```
https://localhost:3000
```

Vous pouvez maintenant utiliser l'application

## Remarque

- Pour se connecter sur deux comptes en même temps, il faut être soit sur deux navigateurs différents (Firefox + Chrome), soit un en navigation normale et l'autre en navigation privée
