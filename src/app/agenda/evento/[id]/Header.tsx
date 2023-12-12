import React, {useEffect} from 'react';
import styles from "@/app/agenda/evento/[id]/Id.module.scss";
import EventMetrics from "@/components/Events/EventMetrics";
import {formattedDate} from "@/utils";
import {IEvent} from "@/types";

interface Props {
    event: IEvent
}
export default function Header({event}: Props) {

    const calculateTotalContribution = () => {
        return event.participants.reduce(
            (total, participant) => (total += participant.contributionAmount || 0),
            0
        );
    };


    return (
        <div className={`grid ${styles.headerWrap}`}>
            <div className="col-8 col-md-8 col-lg-9">
                <div className={styles.date}>{formattedDate(new Date(event.date))}</div>
                <h2 className={styles.title}>{event.title}</h2>
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
                {event.observation}
            </div>
        </div>
    );
}