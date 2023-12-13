"use client";
import React from 'react';
import styles from "./Id.module.scss";
import {Checkbox} from "@/components/Checkbox";
import {useStore} from "@/store";
import {IParticipant} from "@/types";
import {InputEditable} from "@/app/agenda/evento/[id]/InputEditable";
import {addEllipsis} from "@/utils";

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
            <div className="col-12 col-sm-4">
                <Checkbox
                    checked={participant.isItPaid || false}
                    onChange={handlePayment}
                    name={participant.name}
                    value={participant.id}
                />
            </div>
            <div className="col-4 col-sm-2 text-center text-invert">
                <InputEditable eventId={eventId} participant={participant} nameSpace="priceWithDrink"/>
            </div>
            <div className="col-4 col-sm-2 text-right text-invert">
                <InputEditable eventId={eventId} participant={participant} nameSpace="priceWithoutDrink"/>
            </div>
            <div className="col-5 col-sm-3 text-left text-sm-right text-invert">
                <InputEditable eventId={eventId} participant={participant} nameSpace="contributionAmount"/>
            </div>
            <div className="col-6 col-sm-1 text-center text-sm-right">
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