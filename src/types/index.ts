import { ReactNode } from 'react';

export interface IChildren {
    children: ReactNode;
    [key: string]: any;
}

export interface IUser {
    id: string;
    username: string;
    email: string;
}

export interface FormProps {
    onSubmit: (formData: Record<string, string>) => void;
    children: ReactNode;
    submitText: string
}