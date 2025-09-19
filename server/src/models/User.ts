import {User as UserType, UserRole} from '../types';


export class User implements UserType {
    id: string;
    email: string;
    password_hash: string;
    role: UserRole;
    last_login: Date | null;
    created_at: Date;
    updated_at: Date;

    constructor(data: Partial<UserType>) {
        this.id = data.id || '';
        this.email = data.email || '';
        this.password_hash = data.password_hash || '';
        this.role = data.role || UserRole.USER;
        this.last_login = data.last_login || null;
        this.created_at = data.created_at || new Date();
        this.updated_at = data.updated_at || new Date();
    }

    isAdmin(): boolean {
        return this.role === UserRole.ADMIN;
    }

    hasRole(role: UserRole): boolean {
        return this.role === role;
    }
}