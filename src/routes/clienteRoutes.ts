import { Router, Request, Response } from 'express';
import { addCliente, getClienteById, getAllClientes } from '../store/clienteStore';
import { leerClientesDesdeArchivo, guardarClientesEnArchivo } from '../store/fileStore';
import { Cliente, validarCliente } from '../models/cliente';

const router = Router();

router.get('/clientes', async (req: Request, res: Response) => {
  const clientes = await leerClientesDesdeArchivo();
  res.json(clientes);
});

router.get('/clientes/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const clientes = await leerClientesDesdeArchivo();
  const cliente = clientes.find(cliente => cliente.id === id);
  if (cliente) {
    res.json(cliente);
  } else {
    res.status(404).send({ error: 'Cliente no encontrado' });
  }
});

/* router.post('/clientes', async (req: Request, res: Response) => {
  const cliente: Omit<Cliente, 'id'> = req.body; //Crea objeto Cliente menos el atributo 'id'  --> Omit
  const clientes = await leerClientesDesdeArchivo();
  const id = clientes.length > 0 ? clientes[clientes.length - 1].id + 1 : 1; //obtiene ultimo id y le agrega uno o si lista esta vacia setea el primer id
  const newCliente = { ...cliente, id: id };  //... operador de propagación (spread operator). en este caso copia lo que encuentra en ´cliente´ y le agrega el atributo id
  const createdCliente = addCliente(newCliente);
  clientes.push(newCliente)
  await guardarClientesEnArchivo(clientes);
  res.status(201).json(createdCliente);
}); */

router.post('/clientes', async (req: Request, res: Response) => {
  const cliente: Omit<Cliente, 'id'> = req.body; //Crea objeto Cliente menos el atributo 'id'  --> Omit
  const errores = validarCliente(cliente);

  if (errores.length > 0) {
    return res.status(400).json({ errores });
  }

  //const cliente = addCliente(nuevoCliente as Omit<Cliente, 'id'>);

  try {
    const clientes = await leerClientesDesdeArchivo();
    const id = clientes.length > 0 ? clientes[clientes.length - 1].id + 1 : 1; //obtiene ultimo id y le agrega uno o si lista esta vacia setea el primer id
    const newCliente = { ...cliente, id: id };  //... operador de propagación (spread operator). en este caso copia lo que encuentra en ´cliente´ y le agrega el atributo id
    clientes.push(newCliente);
    await guardarClientesEnArchivo(clientes);
    res.status(201).json(newCliente);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al guardar el cliente.' });
  }
});

export default router;
