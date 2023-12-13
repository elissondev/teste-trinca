import React from 'react';
import styles from "./ParticipantsListHeader.module.scss";

interface Props {
    nameSpace?: string
}
export default function ParticipantsListHeader({nameSpace}: Props) {
    return (
        <div className={`grid ${styles.headerList} d-none d-sm-grid`}>
            <div className={`col-12 col-sm-4 text-invert ${nameSpace === 'eventDetails' ? 'col-lg-3' : 'col-lg-4' }`}>
                Participante
            </div>
            <div className="col-12 col-sm-3 col-lg-3 text-invert text-center">
                Valor com bebida
            </div>
            <div className="col-12 col-sm-3 col-lg-3 text-invert text-center">
                Valor sem bebida
            </div>
            <div className={`col-12 col-sm-1 text-invert ${nameSpace === 'eventDetails' ? 'col-lg-3' : 'col-lg-2' }`}>
                {nameSpace === 'eventDetails' && 'Contribuição'}

            </div>
        </div>
    );
}