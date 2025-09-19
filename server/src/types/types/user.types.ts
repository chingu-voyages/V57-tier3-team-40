import {UserRole} from '../enums/userRole.enum';


export type User = {
    id: string;
    email: string;
    password_hash: string;
    role: UserRole;
    last_login: Date | null;
    created_at: Date;
    updated_at: Date;
};

export type UserPublic = Omit<User, 'password_hash'>;

export type UserSession = {
    id: string;
    email: string;
    role: UserRole;
};

