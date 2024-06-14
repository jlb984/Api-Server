import { promises as fs } from 'fs';
import { Cliente } from '../models/cliente';

const FILE_PATH = './src/data/clientes.json';

export const leerClientesDesdeArchivo = async (): Promise<Cliente[]> => {
  try {
    const data = await fs.readFile(FILE_PATH, 'utf-8');
    return JSON.parse(data) as Cliente[];
  } catch (error) {
    const typedError = error as NodeJS.ErrnoException;
    if (typedError.code === 'ENOENT') {
      // El archivo no existe, retornar un arreglo vacío
      return [];
    }
    throw typedError;
  }
};

export const guardarClientesEnArchivo = async (clientes: Cliente[]): Promise<void> => {
  const data = JSON.stringify(clientes, null, 2);
  await fs.writeFile(FILE_PATH, data, 'utf-8');
};
