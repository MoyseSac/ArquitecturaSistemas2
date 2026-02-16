# Assignment-01: Balanceador de carga con Docker Compose

Este proyecto implementa un balanceador de carga con **Nginx** y **Docker Compose**.

- Cada servidor (`server1` y `server2`) utiliza un **Dockerfile** para construir un contenedor Nginx que sirve su propio archivo `index.html`.  
- El **loadbalancer** usa un archivo `nginx.conf` con la directiva `upstream backend`, la cual por defecto distribuye las peticiones en **Round Robin** entre los servidores definidos.

## Entregables
- **Comando para ejecutar infraestructura:** `docker compose up --build`
- **URL del balanceador**: [http://localhost:8080](http://localhost:8080).
