import React from 'react';
import styles from "./ParticipantsList.module.scss";

type Props = {
    data: { label: string, value: any }[]
    onRemove: (v: any) => void
};

export default function ParticipantsList({ data, onRemove }: Props) {

    return (
       <div className={styles.wrap}>
           {data.map(v => (
               <ul>
                   <li className={styles.listItem} key={v.value}>
                       {v.label}

                       <button className={styles.removeBtn} onClick={() => onRemove(v.value)}>X</button>
                   </li>
               </ul>
           ))}
       </div>
    );
}