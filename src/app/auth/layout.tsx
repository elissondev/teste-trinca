import React from 'react';
import {IChildren} from "@/types";
import styles from "./Auth.module.scss"
import stylesPage from '@/styles/pages/page.module.scss'
import Image from "next/image";
import stylesAuth from "@/app/auth/Auth.module.scss";

export default function AuthLayout({ children }: IChildren) {
    return (
        <div className={`${styles.auth}`}>
            <div className={stylesPage.main}>
                <h1 className={stylesAuth.title}>Agenda de Churras</h1>
                {children}
            </div>

            <Image
                className={styles.logo}
                src="/images/logo.png"
                alt="Vercel Logo"
                width={48}
                height={48}
                priority
            />
        </div>
    );
}