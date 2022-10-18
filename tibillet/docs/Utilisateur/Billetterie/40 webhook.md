---
sidebar_position: 40
slug: webhook
title: Webhook
description: Envoyer un POST pour chaque reservation validée.
keywords: [ticketing, billetterie, webhook, api]
wiktags: [ticketing, billetterie, webhook, api]
authors: Jonas
---

Il est possible de réaliser des webhook après chaque évènement réalisé sur la billetterie dans l'interface 
d'administration.

exemple : [https://demo.betabillet.tech/adminBaseBillet/webhook/](https://demo.betabillet.tech/adminBaseBillet/webhook/)

Le webhook se déclenche à chaque validation de reservation gratuite ou payante, en même temps que l'envoi des billets
par email.

Il est possible de voir la dernière réponse de la requete dans le champ "Last response".

```python title="Reservation"
# Celery task : Billetterie/DjangoFiles/BaseBillet/tasks.py

reservation = Reservation.objects.get(pk=reservation_pk)
json = {
    "object": "reservation",
    "uuid": f"{reservation.uuid}",
    "state": f"{reservation.status}",
    "datetime": f"{reservation.datetime}",
}

for webhook in webhooks:
    try :
        response = requests.request("POST", webhook.url, data=json, timeout=2)
        webhook.last_response = f"{timezone.now()} - status code {response.status_code} - {response.text}"
    except Exception as e :
        logger.error(f"webhook_reservation ERROR : {reservation_pk} {timezone.now()} {e}")
        webhook.last_response = f"{timezone.now()} - {e}"
    webhook.save()

```

Il est ensuite possible de récupérer plus d'information sur la reservation via l'API standard [/docs/api/reservations](/docs/api/reservations)