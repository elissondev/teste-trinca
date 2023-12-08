import React from 'react';
import styles from './Button.module.scss';
import {IChildren} from "@/types";

export default function Button({ children, loading, ...rest }: IChildren) {
    return (
        <button disabled={loading} className={styles.button} {...rest}>
            {loading ? ('...') : children}
        </button>
    )
}