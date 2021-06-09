---
sidebar_position: 1
---

# Introducción
¡Bienvenido a la API de GameFlake! Puedes usar nuestra API para acceder a la información de los intercambios de una cuenta de usuario, el catálogo de títulos y los juegos disponibles para cada
título.

La API está diseñada con una estructura REST, con URLs consistentes y orientadas a recursos.
Soportamos esta estructura con características estándar de HTTP: verbos de HTTP para todos nuestros puntos de acceso para indicar distintas acciones, encabezados de autenticación HTTP, y códigos de respuesta HTTP para indicar respuestas exitosas y con distintos errores. 

Siéntete libre de ponerte en contacto por medio de email o la comunidad si tienes preguntas, comentarios, o peticiones acerca de la API.


## Autenticación
GameFlake usa un sistema de tokens para autenticar peticiones a la API. **Salvo por crear cuenta de usuario e iniciar sesión, todas las peticiones deben incluir un token**, y este debe de estar contenido en un
encabezado HTTP que se ve como el siguiente:

`Authorization: Bearer <api_token_aqui>`

Cualquier petición enviada sin un token a un endpoint que requiera autenticación fallará con la 
siguiente respuesta:
```json
{
    "error": "No autenticado. Buen intento.",
    "codigo": 401
}
```

:::caution
Debes reemplazar `<api_token_aqui>` con un token de la API.
:::


## Autorización
GameFlake utiliza un sistema de control de acceso basado en roles y permisos. Esto quiere decir que además del token de autenticación, para que una petición devuelva una respuesta exitosa, el usuario
asociado al token debe tener el permiso correspondiente a la acción de la petición. Si esto no se 
cumple, la API regresa la siguiente respuesta de error:
```json
{
    "error": "No autorizado. Buen intento.",
    "codigo": 403
}
```

## Estructura de las respuestas
Respondemos a todas las peticiones con JSON, volviendo sencilla la conversión de estas respuestas a objetos nativos en varios lenguajes. Esto debería abrir la API a cualquier cliente que soporte estas características y estructuras de datos.

## Códigos de error
Usamos códigos de respuesta HTTP estándar para indicar el estatus de la respuesta. Los códigos en los 200 indican éxito, los 400 usualmente indican un problema de configuración del cliente, y los 500 indican que algo malo está ocurriendo en el servidor.