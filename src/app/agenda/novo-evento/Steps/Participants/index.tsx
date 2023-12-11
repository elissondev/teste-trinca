import React, {useEffect, useState} from 'react';
import Select from 'react-select'
import ParticipantsList from "@/app/agenda/novo-evento/ParticipantsList";
import Button from "@/components/Button";
import Link from "next/link";

type Props = {
    onBack: () => void
};

export default function Participants({onBack}: Props) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedParticipants, setSelectedParticipants] = useState<{label: string, value: any}[]>([])

    const data = [
        {
            value: 1,
            label: "João Carlos",
        },
        {
            value: 2,
            label: "Ana Maria",
        },
        {
            value: 3,
            label: "Aline Oliveira",
        }
    ]

    // Usado para selecionar o participante e incluir na lista
    const handleSelectParticipant = (v: any) => {

        setSelectedOption(v)
        // Caso já tenha sido selecionado, não seleciona mais.
        if (selectedParticipants.find(f => f.value === v.value))
            return
        const currentData: any[] = [...selectedParticipants]
        setSelectedParticipants([...currentData, v])

        setTimeout(() => setSelectedOption(null), 300)
    }

    // Remove um participante da lista
    const handleRemove = (value: any) => {
        const currentData: any[] = [...selectedParticipants]
        setSelectedParticipants(currentData.filter(f => f.value !== value))
    }

    useEffect(() => {
        console.log('selectedParticipants', selectedParticipants)
    }, [selectedParticipants])


    return (
        <>
            <h2 className="text-center">Novo Churras - Participantes</h2>
            <br/><br/>

            <Select
                placeholder="Buscar participante..."
                value={selectedOption}
                options={data}
                isSearchable
                onChange={v => handleSelectParticipant(v)}
            />

            <ParticipantsList data={selectedParticipants} onRemove={handleRemove}/>

            <Button>Salvar</Button>

            <a className="link" onClick={() => onBack()}>Voltar</a>

        </>
    );
}