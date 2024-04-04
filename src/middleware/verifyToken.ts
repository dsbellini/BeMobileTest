import { Request, Response, NextFunction } from 'express';
import jwtUtil from '../utils/jwt.util';

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token de autenticação não fornecido.' });
  }

  try {
    const payload = jwtUtil.verify(token);

    req.headers = payload;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token de autenticação inválido.' });
  }
}
