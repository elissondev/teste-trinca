import React from 'react';
import Image from "next/image";
import Card from "@/components/Card";
import styles from "./AddBarbecue.module.scss";
import Link from 'next/link'

type Props = {};

export default function AddBarbecue(props: Props) {
    return (
        <Link href="/agenda/novo-evento" className={styles.wrap}>
            <Card>
                <div className={styles.icon}>
                    <Image
                        src={`/images/icon_bbq.png`}
                        alt="Icon"
                        width={40}
                        height={44}
                    />
                </div>
                <p className={styles.text}>Adicionar Churras</p>
            </Card>
        </Link>

    );
}