---
id: 001 
title: Consultar catálogo de títulos
description: Documentación del endpoint para consultar catálogo de títulos
slug: /consultar_catalogo_titulos
sidebar_position: 1
---

Consulta la información de todos los títulos en el catálogo de GameFlake.

### Petición HTTP
`POST https://gameflake.game/api/titulos`

### Parámetros de la petición.
No lleva ningún parámetro en el cuerpo de la petición.


### Estructura de la respuesta
La información viene como una arreglo de objetos json, donde cada objeto contiene
los datos de un título.

| Atributo         | Tipo de dato | Descripción                                                                            |
| ---------------- | ------------ | -------------------------------------------------------------------------------------- |
| idTitulo         | Entero       | Identificador único del título                                                         |
| nombre           | String       | Nombre del título                                                                      |
| fechaLanzamiento | Fecha        | Fecha en la que salió por primera vez el título                                        |
| edicion          | String       | Variante del titulo. Es útil para aquellos que fueron lanzados con mas de una versión. |
| imgRuta          | String       | Ruta a la imagen del título                                                            |
| descripcion      | String       | Texto promocional del título                                                           |
| calificacion     | Entero       | Un entero entre 1 y 5 indicando la calificación del título                             |


### Ejemplo de petición y respuesta
```shell title="Ejemplo de petición"
curl "https://gameflake.game/api/titulos" \
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
  },
  {
    "idTitulo": 2,
    "nombre": "Mario Kart 8",
    "fechaLanzamiento": "2017-03-17",
    "edicion": "Estándar",
    "imgRuta": "img/mariokart.jpeg",
    "descripcion": "¡Calienta motores en la versión definitiva de Mario Kart™ 8 y juega donde y cuando quieras! Compite con tus amigos en carreras o en el modo batalla, que incluye circuitos nuevos y otros ya conocidos. Juega en el modo local y en 1080p en partidas de hasta 4 jugadores en el modo televisor. Todos los circuitos de la versión de Wii U, incluyendo el contenido descargable, están disponibles. Además, ¡los inklings aparecen como personajes invitados junto con otro personajes de juegos anteriores, como el Rey Bú, Huesitos y Bowser Jr!",
    "calificacion": 4
  },
  {
    "idTitulo": 3,
    "nombre": "The Legend of Zelda: Breath of the Wild",
    "fechaLanzamiento": "2017-03-18",
    "edicion": "Estándar",
    "imgRuta": "img/zelda.jpeg",
    "descripcion": "Olvida todo lo que sabes acerca de los juegos de la serie The Legend of Zelda. Explora y descubre un mundo lleno de aventuras en The Legend of Zelda: Breath of the Wild, una nueva saga que rompe los esquemas de la aclamada serie. Viaja a través de praderas y bosques, y alcanza cimas de montañas mientras descubres cómo cayó en la ruina el reino de Hyrule en esta emocionante aventura al aire libre. Ahora con Nintendo Switch, tu aventura será más libre y extensa que nunca. Lleva tu consola y vive una gran aventura como Link de la manera que más te guste.",
    "calificacion": 5
  }
]
```
