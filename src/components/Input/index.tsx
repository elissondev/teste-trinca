import React from 'react';
import styles from './Input.module.scss';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
    label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
    return (
        <div className={styles.inputContainer}>
            {label && <label className={styles.label}>{label}</label>}
            <input className={styles.input} {...rest} />
        </div>
    );
};

export default Input;
