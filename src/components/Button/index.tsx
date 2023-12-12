import React from 'react';
import styles from './Button.module.scss';
import {IChildren} from "@/types";

interface Props extends IChildren {
    loading?: boolean
    style?: any
    onClick?: (e?: any) => any
    type?: any
    disabled?: boolean
}

export default function Button({ children, loading, style, ...rest }: Props) {
    return (
        <button style={style} disabled={loading} className={styles.button} {...rest}>
            {loading ? ('...') : children}
        </button>
    )
}