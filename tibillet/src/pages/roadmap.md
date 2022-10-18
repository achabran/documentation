# Roadmap

Vous pouvez retrouver plus de détail sur [la liste des fonctionnalités développées](/docs/presentation/Features) dans la
section de présentation.

Ici sont listé les développements en cours de financement.

## Co-Voiturage

Savez-vous que 80% du bilan carbonne d'un évènement culturel comme un grand festival est dû aux déplacements du public ?

Développons une billetterie qui propose aux festivaliers proches de covoiturer !

- 2 000 / 2 000€ Financé (Merci la [Raffinerie](https://www.laraffinerie.re) !)
    - Connecter [Mobicoop](https://mobicoop.fr/evenement/creer) à TiBillet

## Portefeuille June

On aime beaucoup les June (G1) dans notre coin.
Rajoutons la capacité de notre carte à se recharger dans cette monnaie libre

- 0 / 3000 financé €
    - 3 000 € R&D
- # Roadmap

Vous pouvez retrouver plus de détail sur [la liste des fonctionnalités développées](/docs/presentation/Features) dans la
section de présentation.

## Création d'un outil de gestion de portefeuille fédéré, voire de monnaie locale

Faisons de TiBillet un outil pour la création d'un portefeuille de gestion d'une monnaie locale : Une carte pour tous
les festivals et tiers-lieux d'une région !

- 12 000€ / 48 0000 financé
    - 38 000€ Recherche et développement
    - 5 000€ Audit de sécurité
    - 5 000€ Service juridique

### Idée générale

Élargir le champ d'action de la carte cashless déjà en circulation dans certains lieux :

* La Raffinerie : Le Raftou
* 3Peaks & le Manapany Festival : le PeakSu
* Le Bisik : Le Bisik

Interconnecter les serveurs de gestion TiBillet et créer un réseau de portefeuille ouvert.

Permettre aux utilisateurs des cartes NFC ( carte de portefeuille ET carte d'adhésion ) de chaque lieux de pouvoir s'en
servir dans tout le réseau.

Avoir un agenda partagé sur l'échelle d'un territoire, connecté avec les cartes cashless et les adhésions.

Hashtag : Open-source, libre, fédération, auto-hebergement, open-wallet.

### Utilisations possibles avec la carte commune :

* Buvette et restauration
* Billets pour évènements, festival
* Panier Amap
* Épiceries solidaires
* Adhésions associatives
* Ouverture de salle de coworking, de résidence ?
* Open Badge
* Location de matériel

### Participants :

* [x] Vavang'Art
* [x] La Raffinerie
* [x] Manapany Festival
* [x] COmmunecter
* [ ] Le Bisik ?
* [ ] Récup'R ?
* [ ] Café Domoun ?
* [ ] Comptoir du vrac ?
* [ ] Assemblée Virtuelle ?
* [ ] Des bars comme Le Demeter et l’Étoile Noire ?

# Récapitulatif financier

Le budget est estimé au temps passé sur une base équivalent temps plein ( environ 3000€ / mois total employeur )

Budget sur 5 ans : 250 000 €

### Dépenses engagées:

* SCIC TiBillet : **116 000€**
* PRMA : **6 000€**
* OPENATLAS : **8 000€**
* RAFFINERIE : **1 000€**

### Entrées prévisionnelles 2022 :

* OPENATLAS : **7 000€**
* RTL : **12 000€**
    * Aide au développement pour un modèle fédéré ( 2 500 € )
    * Aide au développement de l'Api ouverte évènementielle ( 2 500 € )
    * Aide à l'ouverture du code Cashless pour une autonomie des lieux. ( 3 000€ )
    * Participation à la création des CGU/CGV dans un modèle fédéré. ( 2 000 € )
    * Achat et mutualisation du matériel hardware pour les TL participants ( 2 000€ )
* RAFFINERIE : **4 000€**
    * Buzzer pour prise de commande ( 2 000 € )
    * Covoiturage pour vente de billet ( 2 000 € )

### Entrée prévisionnel 2023 :

* RTL ( renouvellement budget 12 000€ ? )
* OPENATLA ( budget Odoo ? )
* SCIC TiBIllet ( Activité de formations et développement spécialisé )

# Détail des actions & budgets :

### 1. Développement Python/Django pour un cashless décentralisé et fédéré.

* [x] Cashless
    * [x] Système de paiement sans contact. Rechargement sur place et en ligne.
    * [x] Gestion de prise de commande
    * [x] Adhésion associative
    * [x] Doc sur fonctionnalité complète : <https://tibillet.org/docs/presentation/features>

💰2 EQTP Développeur 1 an : *60 000€.* **Financé 100%**

* SCIC TIBillet ( 44 000€ )
* PRMA Contrat de filière 2018 ( 6 000€ )
* [x] Migration vers une API REST/CRUD ouverte
    * [x] Création d'évènements et gestion des réservations
    * [x] Adhésion et abonnement en ligne
    * [x] Flux RSS
    * [x] Création d'instance Artistes, Lieux & Méta via API
    * [x] Connexion avec Cashless, possibilité de recharger depuis la page du lieux.
    * [x] Documentation technique : <https://documenter.getpostman.com/view/17519122/UVeDtTFC>

**💰**2 EQTP Développeur 6 mois : 30 000€ - **Financé** **13 000€**

* SCIC TiBillet ( 6 500 € )
* OPENATLAS / SGAR ( 6 500 € )
* [x] SSO Communecter.
    * [x] Liaison utilisateur Cashless & CO.

**💰**1 EQTP Dev' 2 semaines : **1500€ Financé 100% ( OPENATLAS / SGAR )**

* [x] Basculer en SaaS - Django/Tenant ( 1 Model user - 1 Agenda partagé - X lieux )
    * [x] Billetterie / Boutik / Event
    * [ ] Cashless

**💰**2 EQTP Dev' 6 mois : **30 000€ Financé 50%**

* 15 000€ SCIC TiBillet
* [ ] Faire un système de double vérification Blockchain / Base de donnée
* [x] Interopérabilité Odoo pour partage d'information sur logiciel ERP
    * [x] Adhésion ( 💰 **1000€ payé par la Raffinerie** )
    * [ ] Report des ventes sur Odoo
    * [ ] Gestion inventaire avec stock Odoo
    * [ ] Moyen de paiement cashless dans Point de vente Odoo
* [x] Agenda partagé sur protocole ouvert
    * [x] Flux RSS
    * [ ] Ical
    * [ ] Fediverse
* [ ] Benchmarker les serveurs ( test de montée en charge )
* [ ] Auditer le code par une entreprise indépendante.
* [x] Test unitaires & fonctionnels
    * [x] Front cashless
    * [x] Backend Cashless
    * [ ] Front & Back Billetterie
* [x] Ouverture du code en licence libre ( GPL/SSPL )
    * [x] Billetterie -> <https://github.com/TiBillet/TiBillet>
    * [ ] Cashless ( en attente d'audit de sécurité )
* [x] Ouvrir la coopérative TiBillet pour une gouvernance partagée entre tout les acteurs
    * [x] Création des statuts
    * [ ] Rédaction du règlement intérieur et du collège de vote
* [ ] Création de l'outil de vérification et de transparence de l’état de la monnaie.
* [ ] S'ouvrir sur le protocole Fédiverse.
* [ ] Interop' avec Movicoop ( 💰 2 000€ prévu par la Raffinerie )
* [ ] Buzzer de table ( 💰 2 000€ prévu par la Raffinerie )
* [ ] Création d'un système de paiement en ligne ligne multicompte ( Stripe connect ) et le lier avec un expert
  comptable

**💰2 EQTP Dev' 2 ans : 120 000 € Financé 30 000€ ( SCIC TiBillet )**

### 2. Créer les conditions générales de ventes et d'utilisation du produit.

Définir les grandes lignes

* [x] Remboursement possible de la monnaie de chaque lieux dans le lieux dit uniquement ( on rembourse par les Bisik a
  la Raffinerie ... )
* [x] Aucun coût pour l'utilisateur
* [ ] Protection des données personnelles et maîtrise complète par l'utilisateur ( chiffrement bout en bout )
* [ ] Captation de l'argent non utilisé ( monnaie glissante sur un an ? )
* [x] Rédaction des CGV/CGU par un avocat spécialisé.

**💰En cours : 2400 € ( cf début de travail en annexe )**

### 3. Construction de hardware

* [ ] Minimum deux boîtiers Raspberry par lieu ( un point de recharge, un point de dépense au bar )
    * 300€ par boîtier. Fabrication en collaboration avec FabLab ?
* [ ] Téléphones de gestion pour restauration et prise de commande en salle ( reconditionné et OS open-source )
* [ ] ex : 150€ un OnePLus 3T sur Backmarket qui peut accepter LineageOS. -> Install party avec libre.re ?
* [ ] Imprimante de ticket pour préparation cuisine et/ou écran tactile
    * 200€ par imprimante thermique chez Sam Bureautique à St Marie.
* [ ] Fabriquer les cartes NFC Réunion des Tiers-Lieux
    * 350 € pour 1000 exemplaires couleurs, format CB, avec QR Code unique directement chez l'usine chinoise. Plancher
      pour une solution un peu plus écolo que des cartes plastique ?

**💰Suivant besoin. Hardware payé par RTL ?**

### 4. Communication et documentation

Écriture de la documentation - <https://tibillet.org/>

* [x] API ( <https://documenter.getpostman.com/view/17519122/UVeDtTFC> )
    * [x] Auto Hébergement ( <https://github.com/TiBillet/TiBillet> )
    * [ ] Utilisateur ( en cours sur <https://tibillet.org/docs/category/documentation-utilisateur> )
    * [x] Vidéo de présentation ( en cours
      sur <https://excalidraw.com/#room=33b52da24fdb5ba64919,65MmDKPeR2QJ5HCY4MSAGg> )
* [ ] Animation le réseau en proposant l'outil et la monnaie a tout tiers-lieux / lieux culturel / Festival

### 5. Communication et documentation

* [x] Animer le dépôt open source et chercher des contributions dans le monde du logiciel libre.
    * [ ] Framasoft
    * [ ] Locavaluto
    * [x] Assemblée Virtuelle
        * [x] App gestion NOÉ
    * [x] Communecter
        * [x] Interop OCECO
    * [x] Movilab
        * [x] Simon Sarazin & système de badge pour gestion de salle

**💰1 EQTP 6 Mois Comm' & rédactionnel : 15 000 €. Financé 50% par SCIC TiBillet.**

