import React from 'react';
import {IChildren} from "@/types";
import Image from "next/image";
import {Toaster} from "react-hot-toast";

export default function AgendaLayout({ children }: IChildren) {
    return (
        <>
            <div className={`header-page panel`}>
                <main className="main">
                    <h1 className="title text-center ">Agenda de Churras</h1>
                    {children}
                </main>

                <Image
                    className="logo"
                    src="/images/logo.png"
                    alt="Vercel Logo"
                    width={48}
                    height={48}
                    priority
                />
            </div>
            <Toaster />
        </>
    );
}