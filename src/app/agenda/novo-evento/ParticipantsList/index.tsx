import React from 'react';
import styles from "./ParticipantsList.module.scss";
import {ListITem} from "@/app/agenda/novo-evento/ParticipantsList/ListITem";
import {useStore} from "@/store";
import ParticipantsListHeader from "@/components/Events/ParticipantsListHeader";

export default function ParticipantsList() {
    const event = useStore((state) => state.event)

    return (
       <div className={styles.wrap}>
           {event.participants?.length ? (
                <ParticipantsListHeader />
           ) : null}

           <ul>
               <ListITem />
           </ul>
       </div>
    );
}