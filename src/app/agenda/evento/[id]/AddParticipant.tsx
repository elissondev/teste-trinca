import React, {useState} from 'react';
import Select from "react-select";
import {IEvent, IParticipant} from "@/types";
import styles from "./Id.module.scss";
import {useStore} from "@/store";
import Login from "@/app/auth/login/page";

type Props = {
    event: IEvent
};

export default function AddParticipant({event}: Props) {
    const store = useStore();
    const [selectedOption, setSelectedOption] = useState<any[]>([]);

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

    const handleSelectParticipant = (v: any) => {

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
            priceWithoutDrink: 10,
            contributionAmount: 0
        }

        store.addNewParticipantToEvent(event.id, participant)
        // Usado para limpar o campo após a seleção.
        setTimeout(() => setSelectedOption([]), 300)
    }

    // Verifica se um participante já está selecionado
    const isItemDisabled = (item: {label: string, value: string}) => {
        return event.participants.length && event.participants.some(option => option.id === item.value);
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