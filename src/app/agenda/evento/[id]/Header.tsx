import React, {useEffect, useRef, useState} from 'react';
import styles from "@/app/agenda/evento/[id]/Id.module.scss";
import EventMetrics from "@/components/Events/EventMetrics";
import {formattedDate} from "@/utils";
import {IEvent} from "@/types";
import {useStore} from "@/store";

interface Props {
    event: IEvent
}

export default function Header({event}: Props) {
    const store = useStore();
    const [editTitle, setEditTitle] = useState<boolean>(false);
    const [editObservation, setEditObservation] = useState<boolean>(false);
    const titleRef = useRef<any>(null);
    const observationRef = useRef<any>(null);


    const calculateTotalContribution = () => {
        return event.participants.reduce(
            (total, participant) => (total += participant.contributionAmount || 0),
            0
        );
    };

    const updateEventDetails = (value: string, key: string) => {
        const updatedDetails = {
            [key]: value
        };
        store.updateEventDetails(event.id, updatedDetails);
    }

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            event.target.blur(); // Remove o foco do input
        }
    };

    useEffect(() => {
        console.log('store.', event)
    }, [event])

    useEffect(() => {
        if (editTitle) titleRef.current?.focus();
        if (editObservation) observationRef.current?.focus();

    }, [editTitle, editObservation]);


    return (
        <div className={`grid ${styles.headerWrap}`}>
            <div className="col-8 col-md-8 col-lg-9">
                <div className={styles.date}>{formattedDate(new Date(event.date))}</div>

                {editTitle ? (
                    <div className={styles.inputContainer}>
                        <input
                            className={styles.inputTitle}
                            placeholder="Valor"
                            ref={titleRef}
                            type="text"
                            value={event.title || ''}
                            onBlur={() => setEditTitle(false)}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                updateEventDetails(e.target.value, 'title')
                            }
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                ) : (
                    <h2 onClick={() => {
                        setEditTitle(true)

                    }} className={styles.title}>{event.title}</h2>
                )}
            </div>
            <div className="col-4 col-md-4 col-lg-3 text-right">
                <div className={styles.metrics}>
                    <EventMetrics
                        value={event.participants.length}
                        icon="icon_people.png"
                        iconWSize={18}
                        iconHSize={15.3}
                    />
                </div>
                <div>
                    <EventMetrics
                        value={`R$${calculateTotalContribution()}`}
                        icon="icon_money.png"
                        iconWSize={20}
                        iconHSize={20}
                    />
                </div>
            </div>
            <div className="col-12">

                {editObservation ? (
                    <div className={styles.inputContainer}>
                        <input
                            className={styles.inputObservation}
                            placeholder="Digite a observação..."
                            ref={observationRef}
                            type="text"
                            value={event.observation || ''}
                            onBlur={() => setEditObservation(false)}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                updateEventDetails(e.target.value, 'observation')
                            }
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                ) : (
                    <p onClick={() => setEditObservation(true)}>{event.observation}</p>
                )}

            </div>
        </div>
    );
}