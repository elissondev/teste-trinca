import React, {useEffect, useState} from 'react';
import Select from 'react-select'
import ParticipantsList from "@/app/agenda/novo-evento/ParticipantsList";
import Button from "@/components/Button";
import {useStore} from "@/store";
import {IParticipants} from "@/types";

type Props = {
    onBack: () => void
};

export default function EventParticipants({onBack}: Props) {
    const event = useStore((state) => state.event)
    const updateEvent = useStore(state => state.updateEvent)

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

    // Usado para atualizar o store do novo evento
    const updateEventStore = () => {
        const participants: IParticipants[] = selectedParticipants.map(p => ({
            id: p.value,
            name: p.label,
            contributionAmount: 0,
            isItPaid: false
        }))

        let eventData = {
            ...event,
            participants
        }

        updateEvent(eventData)
    }

    // Usado para selecionar o participante e incluir na lista
    const handleSelectParticipant = (v: any) => {
        console.log('seleciou')

        // Usado para limpar o campo após a seleção.
        setSelectedOption(v)

        // Caso já tenha sido selecionado, não seleciona mais.
        if (selectedParticipants.find(f => f.value === v.value))
            return

        // Atualiza a lista no state local.
        const currentSelection: any[] = [...selectedParticipants]
        setSelectedParticipants([...currentSelection, v])

        // Usado para limpar o campo após a seleção.
        setTimeout(() => setSelectedOption(null), 300)
    }

    // Remove um participante da lista
    const handleRemove = (value: any) => {
        const currentData: any[] = [...selectedParticipants]
        setSelectedParticipants(currentData.filter(f => f.value !== value))
    }

    // Usado para manter a lista de participantes populada, caso o usuário volte na etapa anterior.
    useEffect(() => {
     if (event.participants?.length)
          setSelectedParticipants(event.participants.map(p => ({label: p.name, value: p.id})))
    }, [])

    // Atualiza o evento no store com a lista de participantes atualizada.
    useEffect(() => {
        updateEventStore()
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