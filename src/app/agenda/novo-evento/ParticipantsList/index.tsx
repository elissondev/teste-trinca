import React from 'react';
import styles from "./ParticipantsList.module.scss";
import {ListITem} from "@/app/agenda/novo-evento/ParticipantsList/ListITem";

type Props = {
    data: { label: string, value: any }[]
    onRemove: (v: any) => void
};

export default function ParticipantsList({ data, onRemove }: Props) {

    return (
       <div className={styles.wrap}>
           {data.length ? (
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
               {data.map(v => (
                       <ListITem key={v.value} item={v} onRemove={onRemove}/>
               ))}
           </ul>
       </div>
    );
}