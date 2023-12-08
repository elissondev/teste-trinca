import React from 'react';
import Image from "next/image";

type Props = {
    value: any
    icon: string
    iconWSize: number
    iconHSize: number
};

export function InfoFooterCard({value, icon, iconWSize, iconHSize}: Props) {
    return (
        <div>
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