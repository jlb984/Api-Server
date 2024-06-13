import { Router, Request, Response } from 'express';

const router = Router();

router.get('/users', (req: Request, res: Response) => {
  res.send('Get all users');
});

router.post('/users', (req: Request, res: Response) => {
  const newUser = req.body;
  res.status(201).send(`User ${newUser.name} created!`);
});

export default router;
