declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production' | 'test';
            PORT: string;
            DB_HOST: string;
            DB_PORT: string;
            DB_USER: string;
            DB_PASSWORD: string;
            DB_NAME: string;
            DB_DIALECT: string;
            JWT_SECRET: string;
            JWT_EXPIRES_IN: string;
            API_VERSION: string;
            CORS_ORIGIN: string;
        }
    }
}

export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: {
        message: string;
        code?: string;
        details?: any;
    };
    meta?: {
        page?: number;
        limit?: number;
        total?: number;
        totalPages?: number;
    };
}

export {};