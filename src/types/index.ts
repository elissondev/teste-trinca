import { ReactNode } from 'react';

export interface IChildren {
    children: ReactNode;
}

export interface IUser {
    id: string;
    username: string;
    email: string;
}