---
slug: newinstall
title: Installer la caisse TiBillet sur Ubuntu 22.04
authors: jonas
wiktags: [ tibillet, cashless, ubuntu, linux, wallet, caisse, caisse enregistreuse ]
image: /img/federons/decollage.jpg
description: Installation d'un serveur cashless.
---

![/img/federons/decollage.jpg](/img/federons/decollage.jpg)

:::
Juillet 2023 : Le cashless est en plein migration d'un Django 2.2 vers un 4.2. Le dépot libre n'est pas complètement a
jour, contactez
nous si vous voulez faire une installation.
:::

Nous allons détailler ici la préparation d'un serveur sous VPS pour acceuillir la solution de caisse TiBillet.

## Préparation du système

### Mises à jour du système

```shell
sudo apt update
sudo apt upgrade -y
sudo reboot
```

### Sécuriser le serveur

#### Connexion SHH par clé

```shell
# Depuis votre ordinateur client
ssh-copy-id <user>@<ip>
# ou ajouter votre cle id_rsa.pub directement sur le serveur 
nano .ssh/authorized_keys 
````

#### Installer Crowdsec

Crowdsec est une solution open source très utile pour gérer la sécurité de votre serveur.
Il utilise une liste de banissement d'ip géré par la communauté, surveille les iptables, et peut même s'interfacer avec
un reverse proxy pour surveiller les requetes http. Plus d'info ici :

- https://www.crowdsec.net/
- https://plugins.traefik.io/plugins/6335346ca4caa9ddeffda116/crowdsec-bouncer-traefik-plugin

Avant d'installer la solution, il est nécéssaire de créer un compte gratuit sur leur site.

```shell
curl -s https://packagecloud.io/install/repositories/crowdsec/crowdsec/script.deb.sh | sudo bash
sudo apt-get install crowdsec
sudo apt install crowdsec-firewall-bouncer-iptables
```

Allez sur l'interface Crowdsec et générez votre token d'invitation :

- https://app.crowdsec.net/security-engines

Une commande du type suivant vous sera proposé :

```sudo cscli console enroll ****```

Lancez la, puis accepter l'invitation sur l'interface web.

Rebootez le serveur.

#### Changer le port d'écoute du service SSH

```shell
sudo nano /etc/ssh/sshd_config
# Port 22
Port 2252 # choisissez un port entre 1024 et 65535

# On en profite pour autoriser l'agent forwarding
# Cela sera trés utile pour pull/push des dépots git avec sa propre identité
# plutôt que celle du serveur.
AllowAgentForwarding yes
```

On recharge le daemon ssh :

```shell
sudo service sshd reload
```

### Installation des dépendances

Mes ptits softs que j'aime utiliser :

```shell
sudo apt update
sudo apt install git byobu htop borgbackup

```

#### Docker :

- https://docs.docker.com/engine/install/ubuntu/

```shell
# Un script d'installation est disponible, si vous ne voulez pas le faire a la main.
curl -fsSL https://get.docker.com -o get-docker.sh
# Attention ! Vérifiez toujours le contenus des scripts téléchargé avant de les lancer en sudo ! 
sudo sh get-docker.sh
# Ajoutez votre utilisteur au groupe docker
sudo usermod -aG docker $USER
```

Relancez une nouvelle session utilisateur pour prendre en compte les changements de groupes et vérifiez que vous avez
bien les droits :

```shell
docker ps
```

#### Traefik

Traefik est un service de reverse proxy. C'est lui qui gère la redirection du conteneur depuis votre DNS et qui s'occupe
du chiffrement HTTPS grâce à la formidable initiavide de lets'encrypt.

```shell
#clonez le dépot
git clone git@github.com:TiBillet/Traefik-reverse-proxy.git
cd Traefik-reverse-proxy
# Creez le sous réseau "frontend" commun
docker network create frontend
# Lancez les conteneur en mode daemon
docker compose up -d
# Vérifiez que le conteneur tourne et qu'il écoute bien les ports 80 et 443 :
docker ps
```

```shell
CONTAINER ID   IMAGE               COMMAND                  CREATED         STATUS         PORTS                                                                    NAMES
7f27255b935a   traefik:chevrotin   "/entrypoint.sh --lo…"   5 seconds ago   Up 4 seconds   0.0.0.0:80->80/tcp, :::80->80/tcp, 0.0.0.0:443->443/tcp, :::443->443/tcp traefik
```

#### Sentry

TiBillet utilise sentry pour la remontée des bugs et des alertes.
Indiquer une clé api sentry est optionnel mais largement conseillée pour l'autohebergement.

#### TiBillet Cashless

Aller récupérer la dernière version du dépot cashless sur https://github.com/TiBillet/TiBillet

```shell
git clone https://github.com/TiBillet/Cashless
cd Cashless/Docker
```

Remplissez toute les variables nécéssaires au lancement de votre instance.

```shell
cp env_example .env
nano .env
```

Lancez les conteneurs et lancez les scripts de premiers lancement pour l'installation.
```shell
docker compose up -d
docker compose exec cashless_django python manage.py migrate
docker compose exec cashless_django python manage.py popdb
```

