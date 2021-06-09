---
id: 003 
title: Consultar juegos de un título
description: Documentación del endpoint para consultar los títulos de un juego
slug: /consultar_juegos
sidebar_position: 3
---

Consulta la información de todos los juegos para un título por su `id`. Un juego
es una copia física del título en cuestión, que algún usuario ha registrado en su
cuenta con el fin de recibir ofertas de intercambio.

### Petición HTTP
`GET https://gameflake.game/api/titulos/<id>/juegos`

### Parámetros de la petición.
| Nombre      | Tipo de dato | ¿Es obligatorio? | Descripción                        |
| ----------- | ------------ | ---------------- | -----------------------------------|
| `id`        | Entero       | Si               | El identificador único del título  |


### Estructura de la respuesta
La información viene como una arreglo de objetos json, donde cada objeto contiene
los datos de un juego.

| Tipo de dato | Atributo             | Descripción                                   |
| ------------ | -------------------- | --------------------------------------------- |
| Entero       | idJuego              | Identificador único del juego                 |
| String       | comentarios          | Observaciones sobre el estado del juego       |
| Entero       | idUsuario            | Identificador único del dueño del juego       |
| Entero       | idTitulo             | Identificador único del título del juego      |
| Entero       | idCondicion          | Identificador único de la condición del juego |
| Entero       | idConsola            | Identificador único de la consola del juego   |
| String       | nombreConsola        | Nombre de la consola para la que es el juego  |
| String       | descripcionCondicion | Texto que indica la condición del juego       |
| String       | nombreUsuario        | Nombre del dueño del juego                    |
| String       | nombreTitulo         | Nombre del título                             |


### Ejemplo de petición y respuesta
```shell title="Ejemplo de petición"
curl "https://gameflake.game/api/titulos/1/juegos" \
  -X "POST" \
  -H "Content-Type: multipart/form-data" \
  -H "Authorization: Bearer <api_token_aqui>" \
```

```json title="Ejemplo de respuesta"
[
  {
    "idJuego": 3,
    "comentarios": "Funciona a la perfección, aunque tiene algunos rayoncitos casi invisibles.",
    "idUsuario": 3,
    "idTitulo": 1,
    "idCondicion": 3,
    "idConsola": 2,
    "nombreCondicion": "usado",
    "nombreConsola": "PlayStation 5",
    "descripcionCondicion": "El juego se usó varias veces y tiene ligeros rayones visibles en su superficie, pero corre con normalidad.",
    "nombreUsuario": "Valeria",
    "nombreTitulo": "Crash Bandicoot: Insane Trilogy"
  }
]
```
