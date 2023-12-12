import React from 'react';
import styles from "@/app/agenda/eventos/Eventos.module.scss";
import EventMetrics from "@/components/Events/EventMetrics";
import Card from "@/components/Card";
import {IEvent} from "@/types";
import {formattedDate} from "@/utils";


export function EventCard({date, title, numberOfUsers, value}: IEvent) {
    return (
        <div className={styles.wrap}>
            <Card padding={"24px"}>
                <h2 className={styles.date}>{formattedDate(String(date))}</h2>
                <p className={styles.title}>{title}</p>
                <div className={styles.info}>
                    <EventMetrics
                        value={numberOfUsers}
                        icon="icon_people.png"
                        iconWSize={18}
                        iconHSize={15.3}
                    />
                    <EventMetrics
                        value={`R$${value}`}
                        icon="icon_money.png"
                        iconWSize={20}
                        iconHSize={20}
                    />
                </div>
            </Card>
        </div>
    );
}