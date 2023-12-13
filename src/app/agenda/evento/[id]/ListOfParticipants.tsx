"use client";
import React from 'react';
import styles from "./Id.module.scss";
import {Checkbox} from "@/components/Checkbox";
import {useStore} from "@/store";
import {IParticipant} from "@/types";
import {InputEditable} from "@/app/agenda/evento/[id]/InputEditable";

interface Props {
    eventId: any
    participant: IParticipant
}

export default function ListOfParticipants({eventId, participant}: Props) {
    const store = useStore();

    const handlePayment = () => {
        store.updateContributionAmount(eventId, participant.id, 0, "contributionAmount");
    };

    const handleRemoveParticipant = (participantId: number) => {
        store.removeParticipantFromEvent(eventId, participantId)
    };

    return (
        <div key={participant.id} className={`grid ${styles.list}`}>
            <div className="col-12 col-md-8 col-lg-3">
                <Checkbox
                    ellipsisLabel
                    checked={participant.isItPaid || false}
                    onChange={handlePayment}
                    name={participant.name}
                    value={participant.id}
                />
            </div>
            <div className="col-12 col-md-8 col-lg-3 text-center">
                <InputEditable eventId={eventId} participant={participant} nameSpace="priceWithDrink"/>
            </div>
            <div className="col-12 col-md-8 col-lg-3 text-center">
                <InputEditable eventId={eventId} participant={participant} nameSpace="priceWithoutDrink"/>
            </div>
            <div className="col-12 col-md-8 col-lg-2">
                <InputEditable eventId={eventId} participant={participant} nameSpace="contributionAmount"/>
            </div>
            <div className="col-12 col-md-8 col-lg-1 text-right">
                <button
                    title={`Remover ${participant.name}`}
                    className={styles.removeBtn}
                    onClick={() => handleRemoveParticipant(participant.id)}
                >
                    X
                </button>
            </div>
        </div>
    );
}