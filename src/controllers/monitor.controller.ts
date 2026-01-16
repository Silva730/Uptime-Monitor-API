import { Request, Response } from 'express';
import * as repo from '../repositories/monitor.repository.js';

export async function listMonitors(req: Request, res: Response) {
  const monitors = await repo.getAll();
  return res.json(monitors);
}

export async function createMonitor(req: Request, res: Response) {
  const { name, url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'url is required' });
  }

  await repo.create({ name, url });
  return res.status(201).json({ message: 'Monitor created' });
}
