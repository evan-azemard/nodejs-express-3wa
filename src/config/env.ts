import dotenv from 'dotenv';
import { EnvConfig } from '../types/env';

dotenv.config();

export const env: EnvConfig = {
    PORT: parseInt(process.env.PORT || '"3000'),
    NODE_ENV: process.env.NODE_ENV as 'development' | 'production' | 'test',
    ORIGIN: process.env.ORIGIN as "http://localhost:5173",
    DATABASE_URL:  process.env.DATABASE_URL || "postgresql://postgres:password@localhost:5432/blog"
}