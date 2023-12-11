import React, {FormEvent, useEffect, useState} from 'react';
import Input from "@/components/Input";
import {Textarea} from "@/components/Textarea";
import Button from "@/components/Button";
import Link from "next/link";
import {useStore} from "@/store";

interface Props {
    onSubmit: (v: any) => void
}

interface EventData {
    date: Date | string
    title: string
    observation: string
}

const initialState = {
    date: '',
    title: '',
    observation: ''
}

export default function EventInformationForm({onSubmit}: Props) {
    const events = useStore((state) => state.events)
    const [date, setDate] = useState<Date | string>('')
    const [title, setTitle] = useState<string>('')
    const [observation, setObservation] = useState<string>('')
    const [tempFormData, setTempFormData] = useState<EventData>(initialState)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const payload: EventData = {
            date,
            title,
            observation
        }

        onSubmit(payload)

    };

    // Usado para manter populado o formulário entre as transições das etapas.
    useEffect(() => {
        const currentData = events.slice(-1)[0];

        if (!currentData.id) {
            setDate(currentData.date)
            setTitle(currentData.title)

            if (currentData.observation)
                setObservation(currentData.observation)
        }

    }, [tempFormData])


    return (
        <>
            <h2 className="text-center">Novo Churras - Informações</h2>
            <br/><br/>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <Input
                        label="Data"
                        placeholder="Informe a data do evento"
                        type="date"
                        value={tempFormData.date as any || date}
                        required
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <Input
                        label="Descrição"
                        placeholder="Digite a descrição do evento"
                        type="text"
                        value={tempFormData.title || title}
                        required
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                    />
                </div>

                <div className="form-control">
                    <Textarea
                        label="Observações"
                        value={tempFormData.title || observation}
                        placeholder="Informe as observações do churras, caso tenha..."
                        onChange={v => setObservation(v.target.value)}
                    />
                </div>

                <Button type="submit">Próximo →</Button>

            </form>

            <Link className="link" href="/agenda/eventos">Cancelar</Link>
        </>
    );
}