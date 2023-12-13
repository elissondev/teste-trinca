import React from 'react';
import styles from './Card.module.scss';
import {IChildren} from "@/types";

interface Props extends IChildren{
    padding?: string
    style?: any
}

export default function Card({ children, style, padding}: Props){
    return (
        <div className={styles.card} style={{...style, padding}}>
            {children}
        </div>
    );
};
