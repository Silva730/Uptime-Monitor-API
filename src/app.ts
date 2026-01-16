import express from 'express';
import monitorRoutes from './routes/monitor.routes.js';

export const app = express();

app.use(express.json());
app.use('/api', monitorRoutes);
