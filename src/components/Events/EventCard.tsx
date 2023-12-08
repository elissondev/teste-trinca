import React from 'react';
import styles from "@/app/agenda/eventos/Eventos.module.scss";
import {InfoFooterCard} from "@/components/Events/InfoFooterCard";
import Card from "@/components/Card";
import {IEvent} from "@/types";


export function EventCard({date, title, numberOfUsers, value}: IEvent) {
    return (
        <div className={styles.wrap}>
            <Card padding={24}>
                <h2 className={styles.date}>{date}</h2>
                <p className={styles.title}>{title}</p>
                <div className={styles.info}>
                    <InfoFooterCard
                        value={numberOfUsers}
                        icon="icon_people.png"
                        iconWSize={18}
                        iconHSize={15.3}
                    />
                    <InfoFooterCard
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