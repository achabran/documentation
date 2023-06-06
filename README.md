# Source du site de documentation https://tibillet.org

## Introduction

TiBillet est une solution d'adhésion associative, de reservation et billetterie en ligne, de gestion de monnaie temps et
monnaie locale, de cashless de festival et de gestion de prise de commande pour buvette et salle de restauration.

## Mise à jour de la documentation

La documentation est écrite en markdown et est générée avec [Docusaurus](https://docusaurus.io/).

### Docker 

Un serveur de développement peut être déployé à l'aide de docker : 
```shell
docker compose -f docker-compose.dev.yml up
```

Puis aller sur https://localhost:3000, ou si Traefik est installé, sur l'adresse renseignée dans le fichier compose.

### Local node

```shell
cd tibillet
npm install
npx docusaurus start
```


###  Déploiement

Assurez-vous d'avoir les droits d'écriture avec votre clé SSH sur le dépot github.

```shell
cd tibillet
npx docusaurus deploy
```


## Mise en prod

Avec Docker, un conteneur temporaire se lance pour générer le site statique.

Le contenu est livré par un conteneur Nginx.

```shell
docker compose up
```
