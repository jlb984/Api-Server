## Documentación de la API de JLB

### Descripción

Esta API permite gestionar una lista de clientes. Puedes agregar nuevos clientes, obtener la lista completa de clientes y recuperar detalles de un cliente específico utilizando su ID único.

### Base URL

```
http://localhost:3000/
```

### Endpoints

#### 1. Obtener todos los clientes

- **URL**: `/clients`
- **Método**: `GET`
- **Descripción**: Devuelve una lista de todos los clientes.
- **Respuesta Exitosa**:
  - **Código**: 200 OK
  - **Cuerpo**:
    ```json
    [
      {
        "id": 1,
        "apellido": "Perez",
        "nombre": "Juan",
        "dni": "12345678",
        "email": "juan.perez@example.com"
      },
      {
        "id": 2,
        "apellido": "Gomez",
        "nombre": "Maria",
        "dni": "87654321",
        "email": "maria.gomez@example.com"
      }
    ]
    ```

#### 2. Obtener un cliente por ID

- **URL**: `/clients/:id`
- **Método**: `GET`
- **Descripción**: Devuelve los detalles de un cliente específico utilizando su ID.
- **Parámetros de URL**:
  - `id` (número) - ID del cliente que deseas obtener.
- **Respuesta Exitosa**:
  - **Código**: 200 OK
  - **Cuerpo**:
    ```json
    {
      "id": 1,
      "apellido": "Perez",
      "nombre": "Juan",
      "dni": "12345678",
      "email": "juan.perez@example.com"
    }
    ```
- **Respuesta de Error**:
  - **Código**: 404 Not Found
  - **Cuerpo**:
    ```json
    {
      "error": "Client not found"
    }
    ```

#### 3. Agregar un nuevo cliente

- **URL**: `/clients`
- **Método**: `POST`
- **Descripción**: Agrega un nuevo cliente a la lista.
- **Cuerpo de la Solicitud**:
  - **Tipo**: `application/json`
  - **Ejemplo**:
    ```json
    {
      "apellido": "Perez",
      "nombre": "Juan",
      "dni": "12345678",
      "email": "juan.perez@example.com"
    }
    ```
- **Respuesta Exitosa**:
  - **Código**: 201 Created
  - **Cuerpo**:
    ```json
    {
      "id": 1,
      "apellido": "Perez",
      "nombre": "Juan",
      "dni": "12345678",
      "email": "juan.perez@example.com"
    }
    ```