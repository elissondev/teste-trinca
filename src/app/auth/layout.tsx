import React from 'react';
import {IChildren} from "@/types";
import stylesPage from '@/styles/pages/page.module.scss'
import Image from "next/image";

export default function AuthLayout({ children }: IChildren) {
    return (
        <div className={`header-page auth`}>
            <div className={stylesPage.main}>
                <h1 className="title">Agenda de Churras</h1>
                {children}
            </div>

            <Image
                className="logo"
                src="/images/logo.png"
                alt="Vercel Logo"
                width={48}
                height={48}
                priority
            />
        </div>
    );
}