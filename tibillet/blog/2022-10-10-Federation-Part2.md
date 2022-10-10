---
slug: federation-part2
title: Fédération 2/3 - L'agenda fédéré
authors: jonas
wiktags: [cashless, fédération, portefeuille, waller]
image: /img/cr_220310_portefeuille_partage/FEDERONS-01.png
description: Fédérons TiBillet, première partie.
---


## Première étape : L'agenda partagé.

Fini le gros bloc centralisé.
La billetterie, qui s'occupe de gérer
les paiements en ligne (recharge cashless via stripe),
les réservations et les ventes de billet
a été complètement repensée.

![/img/federons/06-blockcentral.png](/img/federons/06-blockcentral.png)

Fini le gros bloc PHP, Nous avons choisi d'utiliser le framework python Django
pour développer une API Rest pour plus d'homogénéité avec le Cashless.

Nous l'avons repensé depuis la base pour en faire un modèle
dit de SaaS (Software as a service).
L'idée est de pouvoir utiliser la puissance combiné du moteur
de schéma PostgreSQL pour des applications multi-tenant.

Derrière ce vocabulaire un peu barbare se cache une idée toute
simple : **Un seul serveur pour gérer plusieurs instances** qui se partagent des **informations communes.**

Autrement dit, plutôt que d'avoir
plein de serveurs séparés qui stockent chacun peu ou prou
les mêmes données (carte, utilisateurs, évènements, etc... ),
nous mutualisons tout un territoire sur une seule "Stack".

![/img/federons/07-tenant-part1.png](/img/federons/07-tenant-part1.png)

Certaines données, comme
les utilisateurs et l'agenda sont
partagées entre tous les acteurs. 

D'autre sont uniques 
à chaque instance :
Évènements, adhésions, information générales, cartes cashless
etc ...

![/img/federons/08-samedata.png](/img/federons/08-samedata.png)
