import { Router } from 'express';
import userRoutes from './userRoutes';

const router = Router();

router.use('/users', userRoutes);

router.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

export default router;