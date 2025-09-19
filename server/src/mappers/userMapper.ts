import { User as UserType, UserPublic, UserRole } from '../types';
import { User } from '../models';

export class UserMapper {
    /**
     * Convert Prisma user to public representation
     */
    static prismaToPublic(prismaUser: any): UserPublic {
        return {
            id: prismaUser.id,
            email: prismaUser.email,
            role: prismaUser.role as UserRole, // Now lowercase matches directly
            last_login: prismaUser.last_login,
            created_at: prismaUser.created_at,
            updated_at: prismaUser.updated_at,
        };
    }

    /**
     * Convert database row to User model instance
     */
    static fromDatabaseRow(row: any): User {
        return new User({
            id: row.id,
            email: row.email,
            password_hash: row.password_hash,
            role: row.role as UserRole,
            last_login: row.last_login ? new Date(row.last_login) : null,
            created_at: new Date(row.created_at),
            updated_at: new Date(row.updated_at),
        });
    }

    /**
     * Convert User model to database row format
     */
    static toDatabaseRow(user: User): Record<string, any> {
        return {
            id: user.id,
            email: user.email,
            password_hash: user.password_hash,
            role: user.role,
            last_login: user.last_login?.toISOString() || null,
            created_at: user.created_at.toISOString(),
            updated_at: user.updated_at.toISOString(),
        };
    }

    static toPublic(user: User): UserPublic {
        return {
            id: user.id,
            email: user.email,
            role: user.role,
            last_login: user.last_login,
            created_at: user.created_at,
            updated_at: user.updated_at,
        };
    }

    static toEntity(user: User): UserType {
        return {
            id: user.id,
            email: user.email,
            password_hash: user.password_hash,
            role: user.role,
            last_login: user.last_login,
            created_at: user.created_at,
            updated_at: user.updated_at,
        };
    }

    static toPublicArray(users: User[]): UserPublic[] {
        return users.map(user => this.toPublic(user));
    }

    static fromRegistration(data: {
        email: string;
        password_hash: string;
        role?: UserRole;
    }): User {
        return new User({
            id: Date.now().toString(),
            email: data.email,
            password_hash: data.password_hash,
            role: data.role || UserRole.USER,
            last_login: null,
            created_at: new Date(),
            updated_at: new Date(),
        });
    }
}