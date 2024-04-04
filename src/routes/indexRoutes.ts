import { Router } from 'express';
import allRoutes from './all.routes';

const router = Router();

router.use('/', allRoutes);

export default router;
