import React, {FormEvent, useState} from 'react';
import Input from "@/components/Input";
import {Textarea} from "@/components/Textarea";
import Button from "@/components/Button";

interface Props {
    onSubmit: (v: any) => void
}

export default function Index({onSubmit}: Props) {
    const [date, setDate] = useState('')
    const [title, setTitle] = useState('')
    const [observation, setObservation] = useState('')
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onSubmit({
            date,
            title,
            observation
        })
    };

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
                        value={date}
                        required
                        onChange={e => setDate(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <Input
                        label="Descrição"
                        placeholder="Digite a descrição do evento"
                        type="text"
                        value={title}
                        required
                        onChange={e => setTitle(e.target.value)}
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
        </>
    );
}