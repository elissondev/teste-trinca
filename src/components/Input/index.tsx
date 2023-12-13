import React from 'react';
import styles from './Input.module.scss';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
    label?: string;
    style?: any;
    labelClass?: any;
}

const Input: React.FC<InputProps> = ({ label, style, labelClass, ...rest }) => {
    return (
        <div style={style} className={styles.inputContainer}>
            {label && <label className={`${styles.label} ${labelClass}`}>{label}</label>}
            <input className={styles.input} {...rest} />
        </div>
    );
};

export default Input;
