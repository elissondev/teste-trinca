import React from 'react';
import styles from './Button.module.scss';
import {IChildren} from "@/types";

export default function Button({ children }: IChildren) {
    return <button className={styles.button}>{children}</button>;
}