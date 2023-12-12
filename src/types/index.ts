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

export interface IParticipant {
    id: any,
    name: string,
    contributionAmount?: number,
    priceWithDrink: number,
    priceWithoutDrink: number,
    isItPaid?: boolean
}

export interface IEvent {
    id?: any
    date: Date | string
    title: string
    observation?: string
    numberOfUsers?: number
    participants: IParticipant[]
    value?: number
}

export interface ISelect {
    label: string,
    value: string
}

