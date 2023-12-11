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

export interface IEvent {
    id?: any
    date: string
    title: string
    numberOfUsers: number
    value: number
}

export interface IParticipants {
    id: any,
    name: string,
    contributionAmount: number,
    isItPaid: boolean
}