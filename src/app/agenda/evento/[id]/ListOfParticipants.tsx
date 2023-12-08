"use client";
import React, {useState} from 'react';
import styles from "./Id.module.scss";
import {IParticipants} from "@/types";
import {Checkbox} from "@/components/Checkbox";

type Props = {

};

export default function ListOfParticipants({_id, name, isItPaid, contributionAmount}: IParticipants) {
    const [payment, setPayment] = useState(isItPaid)

    const handlePayment = (v: any) => {
        setPayment(v.target.checked)
    }

    return (
        <div className={`grid ${styles.list}`}>
            <div className="col-8 col-md-8 col-lg-10">
                <Checkbox
                    checked={payment}
                    onChange={v => handlePayment(v)}
                    name={name}
                    value={_id}
                />
            </div>
            <div className="col-4 col-md-4 col-lg-2">
                <span className={`${styles.contributionAmount} ${isItPaid ? styles.paid : ''}`}>R${contributionAmount}</span
                >
            </div>
        </div>
    );
}