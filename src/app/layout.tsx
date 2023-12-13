import type {Metadata} from 'next'
import {Raleway} from 'next/font/google'
import '@/styles/main.scss'
import {Provider} from "@/utils/Providers";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import React from "react";

const raleway = Raleway({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Trinca - Agenda de Churras',
    description: 'Gerenciamento dos churrascos da galera da Trinca.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
        <body className={raleway.className}>
            <div id="modal-root"></div>
            <Provider>
                <ThemeSwitcher />
                {children}
            </Provider>
        </body>
        </html>
    )
}
