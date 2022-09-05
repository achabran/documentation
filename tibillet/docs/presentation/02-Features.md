# Fonctionnalités

Voici une liste des fonctionnalités présentes et en cours de développement.

- [Cashless](/docs/presentation/Features#cashless)
- [Prise de commande](/docs/presentation/Features#gestion-de-prise-de-commande)
- [Billetterie](/docs/presentation/Features#billetterie)

## Cashless

<section>
  <ol class="progress-bar">
    <li class="is-complete"><span>Adhésion</span></li>  
    <li class="is-complete"><span>QrCode</span></li>  
    <li class="is-complete"><span>Monnaie temps</span></li>
    <li class="is-complete"><span>App Android</span></li>  
    <li class="is-active"><span>App Ios</span></li>  
    <li class=""><span>Open Hardware</span></li>
    <li class=""><span>Benchmark</span></li>
  </ol>
</section>

- [X] Interface de point de vente et caisse enregistreuse.
- [X] Accepte Carte bancaire, espèce et cartes NFC (Dites cashless)
  - [ ] Intégration monnaie locale June (G1)
- [X] Cartes NFC Primaires nominatives pour ouverture des points de vente.
  - [X] Classement par lieux et catégories
- [X] Rapport en temps réel et bilan de vente.
- [X] Estimation des bénéfices.
- [ ] Gestion des stocks et inventaires. 
- [X] Adhésion associative nominative.
  - [X] API check adhésion à jour
  - [X] Adhésions & Abonnements avec paiement récurants (mensuel ou annuel)
- [X] QrCode unique pour rechargement en ligne (Stripe)
- [X] Monnaie réelle et monnaie temps//bénévole
- [X] Application Android
- [ ] Application IOs
  - [X] Achat d'un mac
  - [X] Création d'un compte développeur
  - [ ] Installation des dépendances cordova & compilation
- [ ] Documentation utilisateur.
- [ ] Open Hardware pour DIY
  - [ ] R&D avec découpeuse laser
  - [ ] R&D LibreComputeur (La Frite & La Potatoe)
- [ ] Construction de boitiers (30?) pour mutualisation sur un térritoire.
  - [X] Stock lecteur NFC RF522
  - [ ] Recherche d'un stock de pi, ou passage à un autre SoC (la frite ? )
- [ ] Benchmark
  - [X] Code review par les pairs réguliers
  - [ ] audit de sécurité par un organisme indépendant 
    - (5.000€ budgetisé). En attente de mise à jour.
- [ ] TPE de rechargement autonome
  - [ ] Recherche d'un fournisseur de TPE avec API python
    - Stripe et Zettle ne fournissent pas encore la réunion. 
- [ ] Boitiers lecteur NFC déportés 
  - PiZero avec lecteur de carte, pour appairage avec n'importe quel appareil
- [ ] Gestion comptable avec Odoo
  - [X] Création des nouveaux membres et adhésions associatives pour facturation
  - [ ] Interop' des ventes d'articles
  - [ ] Possibilité d'accepter le cashless sur le Pos Odoo
    - R&D nécéssaire pour créer un module qui pilote les cates NFC
- [ ] Remboursement en ligne via Stripe sur CB

## Gestion de prise de commande

<section class="">
  <ol class="progress-bar">
    <li class="is-complete"><span>Portable</span></li>  
    <li class="is-complete"><span>Gestion tactile</span></li>  
    <li class="is-complete"><span>Ticket de préparations</span></li>
    <li class="is-complete"><span>Void</span></li>  
    <li class="is-active"><span>Buzzer</span></li>  
    <li class=""><span>Open Hardware</span></li>
    <li class=""><span>Benchmark</span></li>
  </ol>
</section>

- [X] Double mode : Service au bar et prise de commande sur téléphone en salle.
  - [X] Classement par table
  - [ ] Création des tables graphiquement 
    - Dessine-moi un restaurant en javascript ?
- [X] Affichage des commandes en cours sur écran tactile.
  - [X] Classement des commandes par date ou par état (non préparée, servie, non servie)
  - [X] Validation de la préparation des commandes depuis interface tactile
  - [ ] Envoie d'un signal vibrant/couleur sur la table concernée.
    - Buzzer de table. Budgetisé. En cours de R&D avec la Raffinerie.
- [X] Impression de tickets de commande en cuisine
  - [X] Possibilité d'assigner des articles sur une ou plusieurs imprimantes
    - ex : Les boissons s'impriment au bar, les plats en cuisine.
- [X] Mode "Gerant" pour annuler une commande 
  - Carte Primaire avec autorisations spécial gerant.e 
- [X] Impréssion de billet avec QrCode pour vente à l'acceuil.


## Billetterie

```text
en cours d'écriture ...
```