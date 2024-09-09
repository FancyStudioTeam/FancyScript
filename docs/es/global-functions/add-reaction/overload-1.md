# Función: `add_reaction`

Añade una reacción al mensaje original.

## Firma

```yml
add_reaction: # String [reaction]
```

### Argumentos

- `reaction` ([`string`][String]): La reacción a añadir.

## Ejemplos

:::code-group

```yml [Emoji Unicode]
add_reaction: "👍"
```

```yml [Emoji Personalizado]
add_reaction: "<:custom:123456789012345678>"
```

:::

[String]: /es/learning/data-types#cadenas-de-texto-string
