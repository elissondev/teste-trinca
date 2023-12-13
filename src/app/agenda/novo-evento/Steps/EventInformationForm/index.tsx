import React, {useEffect, useState} from 'react';
import Input from "@/components/Input";
import {Textarea} from "@/components/Textarea";
import Button from "@/components/Button";
import Link from "next/link";
import {useStore} from "@/store";
import {IEvent} from "@/types";

interface Props {
    onSubmit: (v: any) => void
}

export default function EventInformationForm({onSubmit}: Props) {
    const updateEvent = useStore(state => state.updateEvent)

    const event = useStore((state) => state.event)
    const [date, setDate] = useState<Date | string>('')
    const [title, setTitle] = useState<string>('')
    const [observation, setObservation] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const payload: IEvent = {
            id: Math.random().toString(36).substring(2),
            date,
            title,
            observation,
            participants: event.participants
        }

        updateEvent({...event, ...payload})
        onSubmit(payload)

    };

    // Usado para manter populado o formulário entre as transições das etapas.
    useEffect(() => {
        if (!event.id) {
            setDate(event.date)
            setTitle(event.title)

            if (event.observation)
                setObservation(event.observation)
        }
    }, [event])

    return (
        <>
            <h2 className="text-center text-invert">Novo Churras - Informações</h2>
            <br/><br/>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <Input
                        label="Data"
                        placeholder="Informe a data do evento"
                        type="date"
                        value={date as any}
                        required
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <Input
                        label="Descrição"
                        placeholder="Digite a descrição do evento"
                        type="text"
                        value={title}
                        required
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                    />
                </div>

                <div className="form-control">
                    <Textarea
                        label="Observações"
                        value={observation}
                        placeholder="Informe as observações do churras, caso tenha..."
                        onChange={v => setObservation(v.target.value)}
                    />
                </div>

                <Button type="submit">Próximo →</Button>

            </form>

            <Link className="link text-invert" href="/agenda/eventos">Cancelar</Link>
        </>
    );
}