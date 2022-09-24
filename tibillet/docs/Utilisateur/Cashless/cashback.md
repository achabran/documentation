---
sidebar_position: 20
slug: cashback
title: Cashback - Récompensez les recharges
description: Récompensez les recharges en ligne
keywords: [cashless, billetterie, ticketing, cashback, stripe]
wiktags: [cashless, billetterie, ticketing, cashback, stripe]
authors: jonas
---

## Récompensez les grosses recharges en ligne.

Nous avons implémenté un système de cashback en token cadeau suite à la demande de l'un de nos clients.

L'idée est d'encourager les personnes à effectuer eux même leurs rechargements en ligne pour soulager le point
d'acceuil et de rechargement Cashless d'un site.

Dans l'administration de votre page cashless, allez dans "Configuration Générale", puis sur l'onglet "CASHBACK".
Indiquez la somme à partir duquel la récompense s'active, puis la valeur de la récompense, puis activez la case "
Activez le cashbash pour les paiements en ligne ".
Enfin, validez avec le bouton "Enregistrer".

Résultat : Sur Stripe et uniquement sur Stripe, si la somme rechargée dépasse le montant, des tokens "Cadeau" sont
crédités sur la carte.

À noter que ces tokens "Cadeau" sont considéré différemment par la comptabilité et ne rentrent pas dans les
chiffres du calcul du bénéfice. (même monnaie que pour les bénévoles, par exemple. Cf documentation a venir ^^)

### Exemple :

Par exemple :

- Cashback start = 50
- Cashback value = 2.50

Si la personne recharge 55€, elle gagne 2.50 en cadeau.
Si elle recharge 101€, elle gagne 5 en cadeau (x2).