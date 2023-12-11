"use client";
import React, {useEffect, useState} from 'react';
import styles from "./Id.module.scss";
import {IParticipant} from "@/types";
import {Checkbox} from "@/components/Checkbox";

interface Props {
    participant: IParticipant
}

export default function ListOfParticipants({participant}: Props) {
    const [payment, setPayment] = useState(participant.isItPaid)

    const handlePayment = (v: any) => {
        setPayment(v.target.checked)
    }

    useEffect(() => {
        console.log('participant', participant)
    }, [participant])


    return (
        <div className={`grid ${styles.list}`}>
            <div className="col-8 col-md-8 col-lg-10">
                <Checkbox
                    checked={payment as any}
                    onChange={v => handlePayment(v)}
                    name={participant.name}
                    value={participant.id}
                />
            </div>
            <div className="col-4 col-md-4 col-lg-2">
                <span className={`${styles.contributionAmount} ${participant.isItPaid ? styles.paid : ''}`}>R${participant.contributionAmount}</span
                >
            </div>
        </div>
    );
}