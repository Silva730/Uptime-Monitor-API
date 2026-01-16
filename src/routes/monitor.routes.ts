import { Router } from 'express';
import { listMonitors, createMonitor } from '../controllers/monitor.controller.js';

const router = Router();

router.get('/monitors', listMonitors);
router.post('/monitors', createMonitor);

export default router;
