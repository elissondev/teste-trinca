import type {Metadata} from 'next'
import {Raleway} from 'next/font/google'
import '@/styles/main.scss'
import {Provider} from "@/utils/Providers";

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
                {children}
            </Provider>
        </body>
        </html>
    )
}
