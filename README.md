# API GraphQL con Prisma y Node.js

API GraphQL sencilla construida con **Node.js**, **Apollo Server** y **Prisma**.  
Permite consultar usuarios y publicaciones mediante un endpoint público.

La base de datos es **PostgreSQL** alojada en **Neon** y la aplicación está desplegada en **Render**.

---

## Entregables

- **Endpoint público para consumir la API**
- **Esquema de los modelos disponibles**

---

##  Demo en vivo

Puedes consumir la API GraphQL en el siguiente endpoint público:

https://graphql-api-j18e.onrender.com/

---

##  Esquema de modelos disponibles

### 1. Modelo `User`

| Campo | Tipo | Descripción |
|------|------|-------------|
| `id` | ID | Identificador único del usuario |
| `name` | String | Nombre del usuario |
| `email` | String | Correo electrónico del usuario |
| `age` | Int | Edad del usuario |
| `country` | String | País del usuario |
| `createdAt` | DateTime | Fecha y hora de creación |

### 2. Modelo `Post`

| Campo | Tipo | Descripción |
|------|------|-------------|
| `id` | ID | Identificador único de la publicación |
| `title` | String | Título de la publicación |
| `content` | String | Contenido de la publicación |
| `published` | Boolean | Indica si la publicación está publicada |
| `authorId` | ID | Referencia al usuario que creó la publicación |

###  Relaciones

- Un `User` puede tener múltiples `Post` (relación 1:N)
- Un `Post` pertenece a un solo `User` (relación N:1)

###  Nota

Los modelos están definidos en `prisma/schema.prisma` y se sincronizan con la base de datos PostgreSQL.

---

##  Tecnologías utilizadas

- **Node.js**: entorno de ejecución del backend
- **Apollo Server**: servidor GraphQL
- **Prisma**: ORM para la base de datos
- **PostgreSQL**: base de datos relacional
- **Neon**: PostgreSQL en la nube
- **Render**: despliegue de la aplicación

---

##  Ejemplos de consultas

### Obtener todos los usuarios con sus publicaciones

```graphql
query {
  users {
    id
    name
    email
    age
    country
    posts {
      id
      title
      content
      published
    }
  }
}
```

### Obtener un usuario por ID

```graphql
query {
  user(id: 1) {
    name
    email
    posts {
      title
      published
    }
  }
}
```

### Obtener todas las publicaciones con su autor

```graphql
query {
  posts {
    title
    content
    author {
      name
      email
    }
  }
}
```

---

## Estructura del proyecto

```text
.
├── README.md
├── package-lock.json
├── package.json
├── prisma
│   ├── schema.prisma
│   └── seed.js
├── prisma.config.ts
└── src
    ├── resolvers.js
    ├── server.js
    └── typeDefs.js
```

---

## Autenticación

No se implementó autenticación.  
Esta API es pública y está pensada para fines de demostración.

---

## Notas

- Asegúrate de que la variable `DATABASE_URL` esté correctamente configurada.
- El endpoint público puede tardar unos segundos en responder si está inactivo.
- La API está desplegada en Render y lista para consumirse desde cualquier cliente GraphQL.
