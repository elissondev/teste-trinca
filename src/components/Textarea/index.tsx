import React from 'react';

import styles from "./Textarea.module.scss"

type Props = {
    label: string
    value: any
    onChange: (v: any) => void
    placeholder?: string
    rows?: number
};

export function Textarea({label, value, onChange, placeholder, rows = 4 }: Props) {
    return (
        <div>
            <label className={styles.label} htmlFor={value}>{label}</label>
            <textarea
                className={styles.textarea}
                rows={rows}
                name={value}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
}