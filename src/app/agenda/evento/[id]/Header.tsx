import React from 'react';
import styles from "@/app/agenda/evento/[id]/Id.module.scss";
import EventMetrics from "@/components/Events/EventMetrics";

export default function Header() {
    return (
        <div className={`grid ${styles.headerWrap}`}>
            <div className="col-8 col-md-8 col-lg-10">
                <div className={styles.date}>01/12</div>
                <h2 className={styles.title}>Níver do Gui</h2>
            </div>
            <div className="col-4 col-md-4 col-lg-2">
                <div className={styles.metrics}>
                    <EventMetrics
                        value={15}
                        icon="icon_people.png"
                        iconWSize={18}
                        iconHSize={15.3}
                    />
                </div>
                <div>
                    <EventMetrics
                        value={`R$${280}`}
                        icon="icon_money.png"
                        iconWSize={20}
                        iconHSize={20}
                    />
                </div>
            </div>
        </div>
    );
}