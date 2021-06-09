---
id: 002 
title: Cerrar sesión
description: Documentación del endpoint para cerrar sesión 
slug: /api_cerrar_sesion
sidebar_position: 2
---

Elimina un token de autenticación emitido previamente.

### Petición HTTP
`POST https://api.purnito.codes/api/tokens/revoke`

### Parámetros de la petición.
No lleva ningún parámetro en el cuerpo de la petición.


### Ejemplo de petición y respuesta
```shell title="Ejemplo de petición"
curl "https://gameflake.game/api/tokens/revoke" \
  -X "POST" \
  -H "Authorization: Bearer <api_token_aqui>"
```

```json title="Ejemplo de respuesta"
{
    "mensaje": "El token fue eliminado"
}   
```
