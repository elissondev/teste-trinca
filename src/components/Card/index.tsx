import React from 'react';
import styles from './Card.module.scss';
import {IChildren} from "@/types";

interface Props extends IChildren{
    padding?: string
}

export default function Card({ children,  padding}: Props){
    return (
        <div className={styles.card} style={{padding}}>
            {children}
        </div>
    );
};
