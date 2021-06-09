---
id: 002 
title: Consultar detalle de título
description: Documentación del endpoint para consultar detalle de título
slug: /consultar_detalle_titulo
sidebar_position: 2
---

Consulta la información un título por su `id`. Un título, a diferencia de un juego, 
reprenta un videojuego del cual pueden haber muchas copias o juegos registrados en GameFlake.

### Petición HTTP
`GET https://gameflake.game/api/titulos/<id>`

### Parámetros de la petición.
| Nombre      | Tipo de dato | ¿Es obligatorio? | Descripción                        |
| ----------- | ------------ | ---------------- | -----------------------------------|
| `id`        | Entero       | Si               | El identificador único del título  |


### Estructura de la respuesta

| Atributo           | Tipo de dato | Descripción                                                                            |
| ------------------ | ------------ | -------------------------------------------------------------------------------------- |
| `idTitulo`         | Entero       | Identificador único del título                                                         |
| `nombre`           | String       | Nombre del título                                                                      |
| `fechaLanzamiento` | Fecha        | Fecha en la que salió por primera vez el título                                        |
| `edicion`          | String       | Variante del título. Es útil para aquellos que fueron lanzados con mas de una versión. |
| `imgRuta`          | String       | Ruta a la imagen del título                                                            |
| `descripcion`      | String       | Texto promocional del título                                                           |
| `calificacion`     | Entero       | Un entero entre 1 y 5 indicando la calificación del título                             |


### Ejemplo de petición y respuesta
```shell title="Ejemplo de petición"
curl "https://gameflake.game/api/titulos/1" \
  -X "POST" \
  -H "Content-Type: multipart/form-data" \
  -H "Authorization: Bearer <api_token_aqui>" \
```

```json title="Ejemplo de respuesta"
[
  {
    "idTitulo": 1,
    "nombre": "Crash Bandicoot: Insane Trilogy",
    "fechaLanzamiento": "2019-04-12",
    "edicion": "Estándar",
    "imgRuta": "img/crash.jpeg",
    "descripcion": "¡Vuelve Crash Bandicoot™, tu marsupial favorito! Mejorado, embelesado y listo para bailar con la colección de juegos La trilogía. Ahora puedes disfrutar de Crash Bandicoot™ como nunca antes. Gira, salta, rompe, enfréntate a los épicos desafíos y vive las aventuras de los tres juegos con los que empezó todo: Crash Bandicoot™, Crash Bandicoot™ 2: Cortex Strikes Back y Crash Bandicoot™: Warped. ¡Vuelve a vivir tus momentos favoritos de Crash con gráficos remasterizados y prepárate para disfrutar a tope!",
    "calificacion": 5
  }
]
```
