"use client"
import Image from 'next/image'
import stylesPage from "@/styles/pages/page.module.scss";
import React from "react";
import Button from "@/components/Button";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter()

    return (
        <div className={`header-page`}>
            <div className={`${stylesPage.main}`}>
                <h1 className="title">Agenda de Churras</h1>
                <div className="wrap">
                    <Button onClick={() => router.push('/auth/login')}>Entrar</Button>
                </div>
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
    )
}
