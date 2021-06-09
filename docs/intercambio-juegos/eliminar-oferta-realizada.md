---
id: 004 
title: Consultar datos de contacto
description: Documentación del endpoint para consultar datos de contacto
slug: /consultar_datos_contacto
sidebar_position: 4
---

Borra el registro de una oferta. Solo se deben intentar borrar ofertas
realizadas por el usuario y con el estado *Pendiente*.

### Petición HTTP
`DELETE https://gameflake.game/api/ofertas/<id>`

### Parámetros de la petición.
| Nombre        | Tipo de dato | ¿Es obligatorio? | Descripción                                                             |
| ------------- | ------------ | ---------------- | ----------------------------------------------------------------------- |
| `id`          | Entero       | Si               | Identificador único de la oferta a eliminar (se sustituye en la URL).   |


### Ejemplo de petición y respuesta
```shell title="Ejemplo de petición"
curl "https://gameflake.game/api/tokens/create" \
  -X "DELETE" \
  -H "Authorization: Bearer <api_token_aqui>" \
```

```json title="Ejemplo de respuesta"
{
    "mensaje": "La oferta se eliminó exitosamente."
}
```
