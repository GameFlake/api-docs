---
id: 003 
title: Modificar estatus de oferta
description: Documentación del endpoint para modificar estatus de oferta
slug: /modificar_estatus_ofertas
sidebar_position: 3
---

Cambia el estado de oferta una oferta. Este estado indica la etapa en la que se 
encuentra la oferta. El siguiente diagrama resume todos los posibles estados y las
transiciones entre ellos:

![Docusaurus](/img/estados.svg)

- **Pendiente**: el primer estado inmediatamente despues de registrar una oferta.
    En este estado se puede aprovar o rechazar la oferta
- **Rechazada**: este es un estado final que ocurre si el recipiente de una oferta 
    la declina cuando esta pendiente.    
- **Aprobada**: este estado representa una oferta que fue aceptada por su recipiente 
    pero que aun no se completa por que los juegos no han sido intercambiados fisicamente.
- **Terminada**: este es un estado final que se representa que una oferta aprobada fue
    fue concretada con el intercambio de los juegos fisicos.
- **Cancelada**: otro estado final que se presenta cuando los usuario involucrados no pueden
    concretar un intercambio despues de que fue aprobado.

### Petición HTTP
`PUT https://gameflake.game/api/ofertas/<id>/update`

### Parámetros de la petición.
| Nombre        | Tipo de dato | ¿Es obligatorio? | Descripción                                                             |
| ------------- | ------------ | ---------------- | ----------------------------------------------------------------------- |
| `id`          | Entero       | Si               | Identificador único de la oferta a modificar (se sustituye en la URL).  |
| `estado`      | String       | Si               | Nuevo estado a asignar a la oferta.                                     |


### Ejemplo de petición y respuesta
```shell title="Ejemplo de petición"
curl "https://gameflake.game/api/ofertas/<id>/update" \
  -X "PUT" \
  -H "Content-Type: multipart/form-data" \
  -H "Authorization: Bearer <api_token_aqui>" \
  -d $'{
         "estado": "Aprobada"
     }'
```

```json title="Ejemplo de respuesta"
{
    "mensaje": "El estado de la oferta se cambió exitosamente."
}
```
