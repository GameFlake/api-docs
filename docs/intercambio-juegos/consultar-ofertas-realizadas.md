---
id: 002 
title: Consultar ofertas realizadas
description: Documentación del endpoint para consultar ofertas realizadas
slug: /consultar_ofertas_realizadas
sidebar_position: 2
---

Intercambia las credenciales del usuario por un token que debe acompañar
a todas las peticiones posteriores. Este token representa al usuario en un
dispositivo y persiste hasta que se hace una peticion para revocarlo.

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
  -H "Authorization: Bearer <api_token_aqui>" \
  -d $'{
         "email": "gmachia@gmail.com",
         "password": "9yUQc%ewEf^(Tw4",
         "device_name": "iPhone 4s"
     }'
```

```json title="Ejemplo de respuesta"
{
    "token": "1|63eD2tUsY2Xdfoc5SZgFtWCobvjRYbeioT2XZZYU"
}
```
