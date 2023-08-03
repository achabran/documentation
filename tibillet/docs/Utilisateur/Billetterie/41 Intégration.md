---
sidebar_position: 41
slug: iframe
title: Intégration
description: Integrer vos réservations sur votre site web.
keywords: [ticketing, billetterie, webhook, api]
wiktags: [ticketing, billetterie, webhook, api]
image: https://tibillet.org/img/embed_email.jpg

authors: Jonas
---

Vous pouvez intégrer la billetterie à votre site web en utilisant une balise iframe en modifiant la route adéquate   

Exemple : 
- lien de l'évènenement : https://demo.betabillet.tech/event/esbjorn-svensson-trio-080223-1830/
- lien embed : https://demo.betabillet.tech/event/embed/esbjorn-svensson-trio-080223-1830/


Exemple : 
- lien embed : https://demo.betabillet.tech/event/embed/esbjorn-svensson-trio-080223-1830/

```html title="iframe"
<iframe src="https://demo.betabillet.tech/event/embed/esbjorn-svensson-trio-080223-1830/" width="100%" height="1000px" frameborder="0"></iframe>
```

<iframe src="https://demo.betabillet.tech/event/embed/esbjorn-svensson-trio-080223-1830/" width="100%" height="1000px" frameborder="0"></iframe>



## Documentation technique : 


:::warning
Toutes les urls contenant le mot "embed" sont à utiliser uniquement dans un "iframe".
:::

Dans "../Front/src/router/routes.js", 2 possibilités :


### 1 - route existante, ajouter un alias :   
```
{
    path: '/event/:slug',
    // si iframe
    alias: '/event/embed/:slug',
    name: 'Event',
    component: () => import(/* webpackChunkName: "Event" */ '../views/Event.vue')
}
```


### 2 - nouvelle route :
```
{
    path: '/event/embed/:slug',
    name: 'Event',
    component: () => import(/* webpackChunkName: "Event" */ '../views/Event.vue')
}

```

