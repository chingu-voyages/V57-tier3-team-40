import {UserMapper} from '../mappers';
import {prisma} from '../config';
import {UserPublic, UserRole} from '../types';
import {UserRole as PrismaUserRole} from '@prisma/client';

const mapToPrismaRole = (role?: UserRole): PrismaUserRole => {
    if (!role) return PrismaUserRole.USER;

    switch (role) {
        case UserRole.ADMIN:
            return PrismaUserRole.ADMIN;
        case UserRole.USER:
            return PrismaUserRole.USER;
        default:
            return PrismaUserRole.USER;
    }
};

export const userService = {
    async getAllUsers(): Promise<UserPublic[]> {
        const users = await prisma.user.findMany({
            orderBy: {created_at: 'desc'}
        });
        return users.map(user => UserMapper.prismaToPublic(user));
    },

    async getUserById(id: string): Promise<UserPublic | null> {
        const user = await prisma.user.findUnique({
            where: {id}
        });
        return user ? UserMapper.prismaToPublic(user) : null;
    },

    async getUserByEmail(email: string): Promise<any | null> {
        const user = await prisma.user.findUnique({
            where: {email}
        });
        return user;
    },

    async createUser(userData: {
        email: string;
        password_hash: string;
        role?: UserRole;
    }): Promise<UserPublic> {
        const user = await prisma.user.create({
            data: {
                email: userData.email,
                password_hash: userData.password_hash,
                role: mapToPrismaRole(userData.role)
            }
        });
        return UserMapper.prismaToPublic(user);
    },

    async updateUser(id: string, userData: {
        email?: string;
        role?: UserRole;
    }): Promise<UserPublic | null> {
        try {
            const updateData: any = {email: userData.email};
            if (userData.role) {
                updateData.role = mapToPrismaRole(userData.role);
            }

            const user = await prisma.user.update({
                where: {id},
                data: updateData
            });
            return UserMapper.prismaToPublic(user);
        } catch (error) {
            return null;
        }
    },

    async updateLastLogin(id: string): Promise<void> {
        await prisma.user.update({
            where: {id},
            data: {last_login: new Date()}
        });
    },

    async updatePassword(id: string, password_hash: string): Promise<boolean> {
        try {
            await prisma.user.update({
                where: {id},
                data: {password_hash}
            });
            return true;
        } catch (error) {
            return false;
        }
    },

    async deleteUser(id: string): Promise<boolean> {
        try {
            await prisma.user.delete({
                where: {id}
            });
            return true;
        } catch (error) {
            return false;
        }
    },
};