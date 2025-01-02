import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, './../../../.env') });

const development = {
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'root',
        database: process.env.DB_NAME || 'starter',
        timezone: 'Asia/Jakarta',
    },
    seeds: {
        directory: '../../seeds',
    },
};

const production = {
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    },
};

export default { production, development };
