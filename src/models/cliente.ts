export interface Cliente {
    id: number;
    apellido: string;
    nombre: string;
    dni: string;
    email: string;
  }

  // Funciones de validación
export function validarCliente(cliente: Partial<Cliente>): string[] {
  const errores: string[] = [];

  if (!cliente.nombre) {
    errores.push('El nombre es obligatorio.');
  }
  if (!cliente.apellido) {
    errores.push('El apellido es obligatorio.');
  }
  if (!cliente.dni) {
    errores.push('El dni es obligatorio.');
  }
  if (!cliente.email) {
    errores.push('El email es obligatorio.');
  }

  return errores;
}
  