"use client"
import React, {useState} from 'react';
import { useQuery } from '@tanstack/react-query'
import Select from "react-select";
import {IEvent, IParticipant, ISelect, IUser} from "@/types";
import styles from "./AddParticipant.module.scss";
import {useStore} from "@/store";

type Props = {
    event?: IEvent
};

async function fetchUsers() {
    const res = await fetch(`${process.env.API_URL}/users`)

    if (!res.ok) throw new Error('Serviço indisponível. Tente novamente mais tarde.')

    return res.json()
}

export default function AddParticipant({event}: Props) {
    const store = useStore();
    const [selectedOption, setSelectedOption] = useState<any[]>([]);
    const { data } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    })

    // Quando novo evento, store.event
    // Quando detalhes do evento, event

    const handleStopSelection = (eventData: IEvent) => {
        return eventData.participants?.find(f => f.id === eventData.value)
    }

    // Adiciona um participante na lista de participantes, ao selecionar-lo na lista
    const handleSelectParticipant = (v: any) => {

        // Usado para limpar o campo após a seleção.
        setSelectedOption(v)

        // Caso já tenha sido selecionado, não seleciona mais.
        // Ficou obsoleto, pois está sendo usado tratativa para bloquear seleção via componente react-select
        // Mantido como uma segurança redundante.
        if (!event)
            if (handleStopSelection(store.event))
                return

        if (event)
            if (handleStopSelection(event))
                return

        // Adiciona participante na lista do store.
        const participant: IParticipant = {
            id: v.value,
            name: v.label,
            priceWithDrink: 20,
            priceWithoutDrink: 10,
            contributionAmount: 0
        }

        if (!event)
            store.addParticipant(participant)

        if (event)
            store.addNewParticipantToEvent(event.id, participant)

        // Usado para limpar o campo após a seleção.
        setTimeout(() => setSelectedOption([]), 300)
    }

    // Verifica se um participante já está na lista
    const checksIfAParticipantIsAlreadySelected = (store: IEvent, item: IUser) =>
        store.participants.length &&
            store.participants
                .some((option) => option.id === item.id);


    // Verifica se um participante já está selecionado para desativa-lo da lista
    const isItemDisabled = (item: IUser) => {
        if (!event)
            return checksIfAParticipantIsAlreadySelected(store.event, item)
        if (event)
            return checksIfAParticipantIsAlreadySelected(event, item)
    };

    // Faz o mapeamento os dados e adiciona a propriedade isDisabled conforme necessário
    const formattedData = (): any[] => {
        return data?.data.map((item: any) => {
            const payload = {
                label: item.name,
                value: item.id
            }

            return {
                ...payload,
                isDisabled: isItemDisabled(item),
            }
        });
    }

    return (
        <div className={styles.addParticipant}>
            <Select
                className="react-select text-invert"
                placeholder="Incluir participante..."
                isSearchable
                options={formattedData()}
                value={selectedOption}
                onChange={v => handleSelectParticipant(v)}
            />
        </div>
    );
}