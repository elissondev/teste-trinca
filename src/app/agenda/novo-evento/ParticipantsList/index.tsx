import React from 'react';
import styles from "./ParticipantsList.module.scss";
import {ListITem} from "@/app/agenda/novo-evento/ParticipantsList/ListITem";
import {useStore} from "@/store";

export default function ParticipantsList() {
    const event = useStore((state) => state.event)

    return (
       <div className={styles.wrap}>
           {event.participants?.length ? (
               <div className={`grid ${styles.headerList}`}>
                   <div className="col-12 col-md-8 col-lg-4">
                       Participante
                   </div>
                   <div className="col-12 col-md-8 col-lg-3">
                       Valor com bebida
                   </div>
                   <div className="col-12 col-md-8 col-lg-3">
                       Valor sem bebida
                   </div>
                   <div className="col-12 col-md-8 col-lg-2">

                   </div>
               </div>
           ) : null}

           <ul>
               <ListITem />
           </ul>
       </div>
    );
}