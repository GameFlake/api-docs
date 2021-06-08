---
id: 003 
title: Registrar usuario nuevo
description: Documentación del endpoint para registrar un usuario nuevo
slug: /registrar_usuario
sidebar_position: 3
---

Registra una nueva cuenta de usuario.

### Petición HTTP
`POST https://gameflake.game/api/users/store`

### Parámetros de la petición.
| Nombre       | Tipo de dato | ¿Es obligatorio? | Descripción                                        |
| ------------ | ------------ | ---------------- | -------------------------------------------------- |
| `first_name` | String       | Si               | Nombre del usuario de la nueva cuenta              |
| `last_name`  | String       | Si               | Apellido del usuario de la nueva cuenta            |
| `password`   | String       | Si               | Contraseña de la nueva cuenta                      |
| `email`      | String       | Si               | Dirección de correo electrónico de la nueva cuenta |
| `phone`      | String       | Si               | Numero de teléfono de la nueva cuenta              |
| `user_name`  | String       | Si               | Nombre de usuario o username de la nueva cuenta    |

:::info
Este es uno de los pocos endpoints que no requiere un token en el encabezado `Authorization: Bearer <api_token_aqui>`.
:::


### Ejemplo de petición y respuesta
```shell title="Ejemplo de petición"
curl "https://gameflake.game/api/tokens/revoke" \
  -X "POST" \
  -H "Content-Type: multipart/form-data" \
  -H "Authorization: Bearer <api_token_aqui>"
```

```json title="Ejemplo de respuesta"
{
    "mensaje": "El token fue eliminado"
}   
```
