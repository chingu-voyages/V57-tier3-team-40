import dotenv from 'dotenv';

dotenv.config();

export const databaseConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'myapp',
    dialect: process.env.DB_DIALECT || 'postgres',

    pool: {
        max: parseInt(process.env.DB_POOL_MAX || '5'),
        min: parseInt(process.env.DB_POOL_MIN || '0'),
        acquire: parseInt(process.env.DB_POOL_ACQUIRE || '30000'),
        idle: parseInt(process.env.DB_POOL_IDLE || '10000'),
    },

    dialectOptions: process.env.DB_SSL === 'true' ? {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    } : {},

    logging: process.env.NODE_ENV === 'development',
};

export const connectDatabase = async (): Promise<void> => {
    try {
        console.log('Database connection will be established here');
        console.log(`Connecting to ${databaseConfig.dialect} at ${databaseConfig.host}:${databaseConfig.port}`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw error;
    }
};