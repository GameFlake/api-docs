---
id: 002 
title: Consultar ofertas realizadas
description: Documentación del endpoint para consultar ofertas realizadas
slug: /consultar_ofertas_realizadas
sidebar_position: 2
---

Consulta la información de todas las ofertas de intercambio de juegos que 
ha realizado el usuario del token enviado junto con la solicitud.

### Petición HTTP
`GET https://gameflake.game/api/ofertas/realizadas`

### Parámetros de la petición.
No lleva ningún parámetro en el cuerpo de la petición.


### Estructura de la respuesta
La información viene como una arreglo de objetos json, donde cada objeto contiene
los datos de una de las ofertas realizadas.

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
curl "https://gameflake.game/api/ofertas/realizadas" \
  -X "GET" \
  -H "Authorization: Bearer <api_token_aqui>" \
```

```json title="Ejemplo de respuesta"
[
    {
        "id": 4,
        "RecipienteID": 4,
        "Ofertante": 4,
        "TR": "Overcooked 2",
        "TO": "Little Nightmares II",
        "nombre": "Julian",
        "estado": "Pendiente",
        "Apellido": "Pedrin"
    }
]
```
