---
id: 003 
title: Registrar usuario nuevo
description: Documentación del endpoint para registrar un usuario nuevo
slug: /registrar_usuario
sidebar_position: 3
---

Elimina un token de autenticación emitido previamente.

### Petición HTTP
`POST https://gameflake.game/api/tokens/revoke`

### Parámetros de la petición.
No lleva ningún parámetro en el cuerpo de la petición.


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
