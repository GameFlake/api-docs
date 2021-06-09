---
id: 003 
title: Registrar usuario nuevo
description: Documentación del endpoint para registrar un usuario nuevo
slug: /registrar_usuario
sidebar_position: 3
---

Registra una nueva cuenta de usuario. Por seguridad solo permitimos crear usuarios
con los permisos mas básicos (suficientes para usar todos los endpoints documentados aquí)
por medio de esta API, estos son:

- consultar titulo
- registrar juego
- consultar juego
- editar juego
- eliminar juego
- registrar oferta
- consultar oferta
- editar oferta
- eliminar oferta
- consultar usuario

### Petición HTTP
`POST https://api.purnito.codes/api/users/store`

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
curl "https://gameflake.game/api/users/store" \
  -X "POST" \
  -H "Content-Type: multipart/form-data" \
  -d $'{
        "first_name": "Julian",
        "last_name": "Perez",
        "password": "9yUQc%ewEf^(Tw4",
        "email": "gmachia@gmail.com",
        "phone": "4421234567,
        "user_name": "jules"
    }'
```

```json title="Ejemplo de respuesta"
{
    "mensaje": "El usuario fue registrado exitosamente."
}   
```
