"use client";
import React, {useEffect, useState} from 'react';
import styles from "./Id.module.scss";
import {IEvent, IParticipant} from "@/types";
import {Checkbox} from "@/components/Checkbox";
import Input from "@/components/Input";
import {useStore} from "@/store";

interface Props {
    id: any
    participant: IParticipant
}

export default function ListOfParticipants({id, participant}: Props) {
    const updateContributionAmount: (id: any, newAmount: number) => any = useStore((state) => state.updateContributionAmount)
    const event: IEvent = useStore((state) => state.getEventById(id))

    const [payment, setPayment] = useState(participant.isItPaid)
    const [editValue, setEditValue] = useState(false)
    const handlePayment = (v: any) => {
        setPayment(v.target.checked)
    }

    const handleUpdateValue = (id: number, value: number) => {
        console.log('id', id)
        console.log('value', value)
        updateContributionAmount(id, value)
    }

    useEffect(() => {
        console.log('event', event)
    }, [event.participants])


    return (
        <div className={`grid ${styles.list}`}>
            <div className="col-12 col-md-8 col-lg-4">
                <Checkbox
                    checked={payment as any}
                    onChange={v => handlePayment(v)}
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
                                value={participant.contributionAmount}
                                onBlur={() => setEditValue(!editValue)}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    handleUpdateValue(
                                        participant.id,
                                        Number(e.target.value)
                                    )
                                }
                            />
                        </div>
                ) : (
                    <span
                    onClick={() => setEditValue(!editValue)}
                className={`${styles.contributionAmount} ${participant.isItPaid ? styles.paid : ''}`}>
                R${participant.contributionAmount}
            </span>
                    )}

            </div>
        </div>
    );
}