import React from 'react';
import styles from "./Checkbox.module.scss";

type Props = {
    checked: boolean
    onChange: (v: any) => void
    name: any
    value: any
};

export function Checkbox({checked, onChange, name, value}: Props) {
    return (
        <label className={styles.box}> {name}
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