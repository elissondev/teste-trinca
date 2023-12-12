import React from 'react';
import styles from './Input.module.scss';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
    label?: string;
    style?: any;
}

const Input: React.FC<InputProps> = ({ label, style, ...rest }) => {
    return (
        <div style={style} className={styles.inputContainer}>
            {label && <label className={styles.label}>{label}</label>}
            <input className={styles.input} {...rest} />
        </div>
    );
};

export default Input;
