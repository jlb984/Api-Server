import { Cliente } from '../models/cliente';

let clientes: Cliente[] = [];
let nextId = 1;

export const addCliente = (cliente: Omit<Cliente, 'id'>): Cliente => {
  const newCliente = { ...cliente, id: nextId++ };
  clientes.push(newCliente);
  return newCliente;
};

export const getClienteById = (id: number): Cliente | undefined => {
  return clientes.find(cliente => cliente.id === id);
};

export const getAllClientes = (): Cliente[] => {
  return clientes;
};
