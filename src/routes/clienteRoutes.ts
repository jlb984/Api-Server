import { Router, Request, Response } from 'express';
import { addCliente, getClienteById, getAllClientes } from '../store/clienteStore';
import { Cliente } from '../models/cliente';

const router = Router();

router.get('/clientes', (req: Request, res: Response) => {
  res.json(getAllClientes());
});

router.get('/clientes/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const cliente = getClienteById(id);
  if (cliente) {
    res.json(cliente);
  } else {
    res.status(404).send('Cliente no encontrado');
  }
});

router.post('/clientes', (req: Request, res: Response) => {
  const newCliente: Omit<Cliente, 'id'> = req.body;
  const createdCliente = addCliente(newCliente);
  res.status(201).json(createdCliente);
});

export default router;
