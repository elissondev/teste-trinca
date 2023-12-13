import React from 'react';
import Image from "next/image";
import styles from "./EventMetrics.module.scss";
import {formatarMoeda} from "@/utils";

type Props = {
    value: any
    icon: string
    iconWSize: number
    iconHSize: number
    itSCurrency?: boolean
};



export default function EventMetrics({value, icon, iconWSize, iconHSize, itSCurrency}: Props) {
    return (
        <div className={styles.wrap}>
            <Image
                src={`/images/${icon}`}
                alt="Icon"
                width={iconWSize}
                height={iconHSize}
            />
            {itSCurrency ? formatarMoeda(value) : value}
        </div>
    );
}