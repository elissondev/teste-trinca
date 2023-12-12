"use client";
import React, {useEffect, useState} from 'react';
import styles from "./Id.module.scss";
import {IEvent, IParticipant} from "@/types";
import {Checkbox} from "@/components/Checkbox";
import {useStore} from "@/store";

interface Props {
    eventId: any
    participant: IParticipant
}

export default function ListOfParticipants({eventId, participant}: Props) {
    const store = useStore();
    const [editValue, setEditValue] = useState<boolean>(false);

    const handlePayment = () => {
        store.updateIsItPaid(participant.id, !participant.isItPaid);
    };

    const handleUpdateValue = (value: number) => {
        store.updateContributionAmount(eventId, participant.id, value);
    };


    return (
        <div key={participant.id} className={`grid ${styles.list}`}>
            <div className="col-12 col-md-8 col-lg-4">
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
            <div style={{ textAlign: 'right' }} className="col-12 col-md-8 col-lg-2">
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
        </div>
    );
}