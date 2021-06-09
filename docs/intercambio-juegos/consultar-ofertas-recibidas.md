---
id: 001 
title: Consultar ofertas recibidas
description: Documentación del endpoint para consultar ofertas recibidas
slug: /consultar_ofertas_recibidas
sidebar_position: 1
---

Consulta la información de todas las ofertas de intercambio de juegos que 
ha recibido el usuario del token enviado junto con la solicitud.

### Petición HTTP
`GET https://gameflake.game/api/ofertas/recibidas`

### Parámetros de la petición.
No lleva ningún parámetro en el cuerpo de la petición.


### Estructura de la respuesta
La información viene como una arreglo de objetos json, donde cada objeto contiene
los datos de una de las ofertas recibidas.

| Atributo       | Tipo de dato | Descripción                                                  |
| -------------- | ------------ | ------------------------------------------------------------ |
| `id`           | Entero       | Identificador único de la oferta                             |
| `RecipienteID` | Entero       | Identificador único del usuario que recibe la oferta         |
| `Ofertante`    | Entero       | Identificador único del usuario que realiza la oferta        |
| `TR`           | String       | Título del juego que pide el usuario que realiza la oferta   |
| `TO`           | String       | Título del juego que ofrece el usuario que realiza la oferta |
| `nombre`       | String       | Nombre del usuario que realiza la oferta                     |
| `estado`       | String       | Una cadena indicando el estatus de la oferta                 |
| `Apellido`     | String       | Apellido del usuario que realiza la oferta               


### Ejemplo de petición y respuesta
```shell title="Ejemplo de petición"
curl "https://gameflake.game/api/ofertas/recibidas" \
  -X "POST" \
  -H "Content-Type: multipart/form-data" \
  -H "Authorization: Bearer <api_token_aqui>" \
```

```json title="Ejemplo de respuesta"
[
    {
        "id": 2,
        "RecipienteID": 1,
        "Ofertante": 2,
        "TR": "Mario Kart 8",
        "TO": "The Legend of Zelda: Breath of the Wild",
        "nombre": "Guillermo",
        "estado": "Pendiente",
        "Apellido": "Espino"
    },
    {
        "id": 1,
        "RecipienteID": 1,
        "Ofertante": 3,
        "TR": "Mario Kart 8",
        "TO": "Crash Bandicoot: Insane Trilogy",
        "nombre": "Valeria",
        "estado": "Pendiente",
        "Apellido": "Guerra"
    },
    {
        "id": 3,
        "RecipienteID": 1,
        "Ofertante": 5,
        "TR": "Mario Kart 8",
        "TO": "Little Nightmares II",
        "nombre": "Julian",
        "estado": "Pendiente",
        "Apellido": "Pedrin"
    }
]
```
