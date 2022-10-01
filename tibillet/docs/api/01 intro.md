---
sidebar_position: 1
slug: intro
title: Introduction
description: Manipulez TiBillet en cli !
keywords: [cashless, billetterie, ticketing, cli, curl, python]
wiktags: [cashless, billetterie, ticketing, curl, python]
authors: jonas
---

:::caution
La documentation est en cours de rédaction.

N'hésitez pas à venir discuter avec nous sur **[Discord](https://discord.gg/7FJvtYx)** pour avoir plus d'informations !
:::

TiBillet est construit autour de l'API REST [DJango Rest Framework](https://www.django-rest-framework.org/).

Une documentation complète des points d'api, et automatiquement générée par Postman est disponible ici :

[https://documenter.getpostman.com/view/17519122/UVeDtTFC](https://documenter.getpostman.com/view/17519122/UVeDtTFC)

Toute les requetes sont basées sur une authentification JWT :

[https://django-rest-framework-simplejwt.readthedocs.io/en/latest/](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)

Une documentation un peu plus abordable est en cours 
de rédaction.

Certaines actions sont aussi disponibles via une autorisation [avec clé d'api](/docs/api/apikey) au lieu d'un JWT.
