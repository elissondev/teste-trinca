import React, {useState} from 'react';
import Select from 'react-select'
import ParticipantsList from "@/app/agenda/novo-evento/ParticipantsList";
import Button from "@/components/Button";
import {useStore} from "@/store";
import {IParticipant} from "@/types";

type Props = {
    onBack: () => void
};

export default function EventParticipants({onBack}: Props) {
    const event = useStore((state) => state.event)
    const addParticipant = useStore(state => state.addParticipant)

    const [selectedOption, setSelectedOption] = useState<any>(null);

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
    const handleSelectParticipant = (v: { value: string, label: string }) => {

        // Usado para limpar o campo após a seleção.
        setSelectedOption(v)

        // Caso já tenha sido selecionado, não seleciona mais.
        if (event.participants?.find(f => f.id === v.value))
            return

        // Adiciona participante na lista do store.
        const participant: IParticipant = {
            id: v.value,
            name: v.label,
            priceWithDrink: 20,
            priceWithoutDrink: 10
        }

        addParticipant(participant)

        // Usado para limpar o campo após a seleção.
        setTimeout(() => setSelectedOption(null), 300)
    }

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

            <ParticipantsList />

            <Button>Salvar</Button>

            <a className="link" onClick={() => onBack()}>Voltar</a>

        </>
    );
}