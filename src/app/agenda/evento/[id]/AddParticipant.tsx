import React, {useState} from 'react';
import Select from "react-select";
import {IEvent, IParticipant, ISelect} from "@/types";
import styles from "./Id.module.scss";
import {useStore} from "@/store";

type Props = {
    event?: IEvent
};

export default function AddParticipant({event}: Props) {
    const store = useStore();
    const [selectedOption, setSelectedOption] = useState<any[]>([]);

    // Quando criado novo evento, então é store.event
    // Quando é detalhes do evento, então vem do argumento event

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

    const handleStopSelection = (eventData: IEvent) => {
        return eventData.participants?.find(f => f.id === eventData.value)
    }

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

    const checksIfAParticipantIsAlreadySelected = (store: IEvent, item: ISelect) => {
       return store.participants.length &&
           store.participants
               .some((option) => option.id === item.value);
    }

    // Verifica se um participante já está selecionado
    const isItemDisabled = (item: ISelect) => {
        if (!event)
            return checksIfAParticipantIsAlreadySelected(store.event, item)
        if (event)
            return checksIfAParticipantIsAlreadySelected(event, item)
    };

    // Faz o mapeamento os dados e adiciona a propriedade isDisabled conforme necessário
    const formattedData = data.map((item: any) => ({
        ...item,
        isDisabled: isItemDisabled(item),
    }));


    return (
        <div className={styles.addParticipant}>
            <Select
                placeholder="Incluir participante..."
                isSearchable
                options={formattedData}
                value={selectedOption}
                onChange={v => handleSelectParticipant(v)}
            />
        </div>
    );
}