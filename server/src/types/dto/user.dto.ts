import {UserRole} from '../enums/userRole.enum';

export type UserCreateDTO = {
    email: string;
    password: string;
    role?: UserRole;
};

export type UserLoginDTO = {
    email: string;
    password: string;
};

export type UserUpdateDTO = {
    email?: string;
    role?: UserRole;
};

export type PasswordChangeDTO = {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
};

export type PasswordResetRequestDTO = {
    email: string;
};

export type PasswordResetDTO = {
    token: string;
    newPassword: string;
    confirmPassword: string;
};
