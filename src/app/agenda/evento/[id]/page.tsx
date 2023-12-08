import styles from '@/styles/pages/page.module.scss'
interface Props {
    params: {
        id: string
    }
}

export default function Events({params}: Props) {
    return (
        <main className={styles.main}>
            <h1>Detalhes do evento {params.id}</h1>
        </main>
    )
}

