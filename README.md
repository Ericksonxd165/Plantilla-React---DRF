
# Plantilla de Proyecto React + Django Rest Framework

Este es un proyecto que utiliza Vite como bundler para un proyecto de React con Vanilla Javascript y Django Rest Framework



## Requisitos:

- Docker 
- Node.js
- Python


## Contiene:

- Registro 
- Inicio de Sesion
- Autenticacion con JWT
- Dashboard





## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Django



## Como probar localmente

Clona el proyecto

```bash
  git clone https://github.com/Ericksonxd165/Plantilla-React---DRF
```




## Para instalar

Navegar a la carpeta frontend en la terminal
```bash
  cd frontend
```
 y ejecutar:
```bash
  npm install
```
Posteriormente ir a la carpeta Raiz:

```bash
  cd ..
```
 Y ejecutar:
 ```bash
  docker-compose up --build
```

## Una vez se haya Construido el Contenedor

 Ejecutar:
 ```bash
  docker-compose run backend python manage.py makemigrations 
```
y seguidamente:

 ```bash
  docker-compose run backend python manage.py migrate 
```

*Una vez Hecho esto el proyecto habra hecho las migraciones de la base de datos y podra ejecutarse normalmente*
## Para Iniciar el Proyecto:

Pueden escribir el siguiente comando para levantar el contenedor

```javascript
docker-compose up
```
*Asegurarse de estar en la carpeta Raiz*

## Atencion:
## Si necesitas ejecutar el proyecto y no tienes docker puedes hacerlo de la siguiente manera:

*Cambiate a la rama: Non-docker*

Abres una terminal y vas a escribir:

 ```bash
  cd frontend
```

Y luego:

 ```bash
  npm install
// Una vez se instale
  npm run dev
```
y para correr el backend solamente Abriras una segunda terminal y vas a escribir:


 ```bash
  cd backend
```
Y Posteriormente:

 ```bash
  python manage.py makemigrations
  python manage.py migrate
  python manage.py runserver
```

*Teniendo ambas terminales abiertas podras usar el proyecto con una base de datos SQLite*
