import React, {useEffect, useRef, useState} from 'react';
import styles from "@/app/agenda/evento/[id]/Id.module.scss";
import {useStore} from "@/store";
import {IParticipant} from "@/types";
import {formatarMoeda} from "@/utils";

type Props = {
    eventId: any
    participant: IParticipant
    nameSpace: 'priceWithoutDrink' | 'priceWithDrink' | 'contributionAmount'
};

export function InputEditable({eventId, participant, nameSpace}: Props) {
    const store = useStore();
    const [editInput, setEditInput] = useState<boolean>(false);
    const inputRef = useRef<any>(null);
    const handleUpdateValue = (value: number) => {
        store.updateContributionAmount(eventId, participant.id, value, nameSpace);
    };

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            event.target.blur(); // Remove o foco do input
        }
    };

    useEffect(() => {
        if (editInput) inputRef.current?.focus();
    }, [editInput]);

    return (
        <>
            {editInput ? (
                <div className={styles.inputContainer}>
                    <input
                        className={styles.editableInput}
                        min={0}
                        max={1000}
                        maxLength={4}
                        ref={inputRef}
                        placeholder="Valor"
                        type="number"
                        value={participant[nameSpace] || ''}
                        onBlur={() => setEditInput(false)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleUpdateValue(Number(e.target.value))
                        }
                        onKeyPress={handleKeyPress}
                    />
                </div>
            ) : (
                <span
                    title="Clique para alterar o valor"
                    onClick={() => setEditInput(true)}
                    className={`
                        ${styles[nameSpace]}
                        ${nameSpace === 'contributionAmount' ? participant.isItPaid ? styles.paid : '' : null}
                    `}
                >
                        {formatarMoeda(participant[nameSpace])}
                    </span>
            )}
        </>
    );
}