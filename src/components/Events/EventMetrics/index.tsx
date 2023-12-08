import React from 'react';
import Image from "next/image";
import styles from "./EventMetrics.module.scss";

type Props = {
    value: any
    icon: string
    iconWSize: number
    iconHSize: number
};



export default function EventMetrics({value, icon, iconWSize, iconHSize}: Props) {
    return (
        <div className={styles.wrap}>
            <Image
                src={`/images/${icon}`}
                alt="Icon"
                width={iconWSize}
                height={iconHSize}
            />
            {value}
        </div>
    );
}