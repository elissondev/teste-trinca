import React from 'react';
import styles from './Card.module.scss';
import {IChildren} from "@/types";

export default function Card({ children, padding }: IChildren){
    return (
        <div className={styles.card} style={{padding}}>
            {children}
        </div>
    );
};
