"use client";
import React, {useState} from 'react';
import styles from "./Id.module.scss";
import {Checkbox} from "@/components/Checkbox";
import {useStore} from "@/store";
import {IParticipant} from "@/types";

interface Props {
    eventId: any
    participant: IParticipant
}

export default function ListOfParticipants({eventId, participant}: Props) {
    const store = useStore();
    const [editValue, setEditValue] = useState<boolean>(false);

    const handlePayment = () => {
        store.updateContributionAmount(eventId, participant.id, 0, "contributionAmount" );
    };

    const handleUpdateValue = (value: number) => {
        store.updateContributionAmount(eventId, participant.id, value, "contributionAmount");
    };

    const handleRemoveParticipant = (participantId: number) => {
        store.removeParticipantFromEvent(eventId, participantId)
    };

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            event.target.blur(); // Remove o foco do input
        }
    };

    return (
        <div key={participant.id} className={`grid ${styles.list}`}>
            <div className="col-12 col-md-8 col-lg-3">
                <Checkbox
                    checked={participant.isItPaid || false}
                    onChange={handlePayment}
                    name={participant.name}
                    value={participant.id}
                />
            </div>
            <div className="col-12 col-md-8 col-lg-3 text-center">
                R${participant.priceWithDrink}
            </div>
            <div className="col-12 col-md-8 col-lg-3 text-center">
                R${participant.priceWithoutDrink}
            </div>
            <div className="col-12 col-md-8 col-lg-2">
                {editValue ? (
                    <div className={styles.inputContainer}>
                        <input
                            className={styles.input}
                            placeholder="Valor"
                            type="number"
                            value={participant.contributionAmount || ''}
                            onBlur={() => setEditValue(false)}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleUpdateValue(Number(e.target.value))
                            }
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                ) : (
                    <span
                        onClick={() => setEditValue(true)}
                        className={`${styles.contributionAmount} ${participant.isItPaid ? styles.paid : ''}`}
                    >
            R${participant.contributionAmount}
          </span>
                )}

            </div>
            <div className="col-12 col-md-8 col-lg-1 text-right">
                <button title={`Remover ${participant.name}`} className={styles.removeBtn} onClick={() => handleRemoveParticipant(participant.id)}>
                    X
                </button>
            </div>
        </div>
    );
}