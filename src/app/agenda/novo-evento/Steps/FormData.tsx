import React, {useState} from 'react';
import Input from "@/components/Input";
import {Textarea} from "@/components/Textarea";

export default function FormData() {
    const [date, setDate] = useState('')
    const [title, setTitle] = useState('')
    const [observation, setObservation] = useState('')

    return (
        <>
            <h2 className="text-center">Novo Churras - Informações</h2>
            <br/><br/>
            <form>
                <Input
                    label="Data"
                    placeholder="Informe a data do evento"
                    type="date"
                    value={date}
                    required
                    onChange={e => setDate(e.target.value)}
                />
                <Input
                    label="Descrição"
                    placeholder="Digite a descrição do evento"
                    type="text"
                    value={title}
                    required
                    onChange={e => setTitle(e.target.value)}
                />

                <Textarea
                    label="Observações"
                    value={observation}
                    placeholder="Informe as observações do churras, caso tenha..."
                    onChange={v => setObservation(v.target.value)}
                />

            </form>
        </>
    );
}