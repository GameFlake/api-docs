---
id: 001 
title: Iniciar sesión
description: Documentación del endpoint para iniciar sesión 
slug: /api_iniciar_sesion
sidebar_position: 1
---

Intercambia las credenciales del usuario por un token y un arreglo de permisos. 

El token representa al usuario en un dispositivo y debe acompañar a todas las 
peticiones posteriores que requieran autenticacion. El token tambien persiste 
hasta que se hace una peticion para revocarlo.

El arreglo de permisos contiene una serie de cadenas que representan las acciones
que tiene permitidas el usuario en el sistema.

### Petición HTTP
`POST https://gameflake.game/api/tokens/create`

### Parámetros de la petición.
| Nombre        | Tipo de dato | ¿Es obligatorio? | Descripción                                    |
| ------------- | ------------ | ---------------- | ---------------------------------------------- |
| `email`       | String       | Si               | Dirección de correo electrónico del usuario.   |
| `password`    | String       | Si               | Contraseña de la cuenta del usuario.           |
| `device_name` | String       | Si               | Nombre del dispositivo donde se inicia sesión. |

:::info
Este es uno de los pocos endpoints que no requiere un token en el encabezado `Authorization: Bearer <api_token_aqui>`.
:::


### Ejemplo de petición y respuesta
```shell title="Ejemplo de petición"
curl "https://gameflake.game/api/tokens/create" \
  -X "POST" \
  -H "Content-Type: multipart/form-data" \
  -d $'{
         "email": "gmachia@gmail.com",
         "password": "9yUQc%ewEf^(Tw4",
         "device_name": "iPhone 4s"
     }'
```

```json title="Ejemplo de respuesta"
{
    "token": "1|63eD2tUsY2Xdfoc5SZgFtWCobvjRYbeioT2XZZYU",
    "permisos": [
        "consultarTitulo",
        "registrarJuego",
        "consultarJuego",
        "editarJuego",
        "eliminarJuego",
        "registrarOferta",
        "consultarOferta",
        "editarOferta",
        "eliminarOferta",
        "consultarUsuario"
    ]
}
```
