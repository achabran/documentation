# Installation

Une [version de démonstration](/docs/presentation/Demonstration) est disponible en ligne.

## Ticketing :

[Install Docker](https://docs.docker.com/engine/install/)

```shell
git clone git@github.com:TiBillet/TiBillet.git
cd TiBillet
git checkout origin/PreProd
cd Docker/Development
cp env_example .env
# change cred inside .env
nano .env
docker compose up -d
```

Launch the backend service for dev :
```shell
# Go inside the django container :
docker exec -ti billetterie_django bash
bash ./install.sh 
python /DjangoFiles/manage.py runserver 0.0.0.0:8002
```

Launch the frontend service for dev' : 
```shell
docker exec -ti billetterie_nodejs_dev bash
npm install
npm run dev
```

No reverse proxy ? No problem with linux !

Just add to /etc/hosts the domain and subdomain of your choice.

```
172.17.0.1       tibillet.local
172.17.0.1       m.tibillet.local
172.17.0.1       demo.tibillet.local
```

