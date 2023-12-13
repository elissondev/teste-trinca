import React from 'react';
import styles from "./Checkbox.module.scss";

type Props = {
    checked: boolean
    onChange: (v: any) => void
    name: any
    value: any
    ellipsisLabel?: boolean
};

export function Checkbox({checked, onChange, name, value, ellipsisLabel}: Props) {
    return (
        <label title={name} className={`${styles.box} ${ellipsisLabel ? 'ellipsis' : ''}`}> {name}
            <input
                type="checkbox"
                checked={checked}
                onChange={(v) => onChange(v)}
                name={name}
                value={value}
            />
            <span className={styles.checkmark}></span>
        </label>
    );
}