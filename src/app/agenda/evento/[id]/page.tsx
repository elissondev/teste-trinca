"use client"

import React, {useState} from "react";
import Modal from "@/components/Modal";
import Card from "@/components/Card";
import Header from "@/app/agenda/evento/[id]/Header";
import ListOfParticipants from "@/app/agenda/evento/[id]/ListOfParticipants";
import {IEvent, IParticipant} from "@/types";
import {useStore} from "@/store";
import ParticipantsListHeader from "@/components/Events/ParticipantsListHeader";
import Link from "next/link";
import {useRouter} from "next/navigation";
import Button from "@/components/Button";
import toast from "react-hot-toast";
import AddParticipant from "@/components/Events/AddParticipant";
import styles from "./Id.module.scss"

interface Props {
    params: {
        id: string
    }
}

export default function Events({params: {id}}: Props) {
    const router = useRouter()
    const store = useStore();
    const event: IEvent = store.getEventById(id)
    const [showModal, setShowModal] = useState(false);

    if (!id || !event)
        return router.push('/agenda/eventos')

    const handleDeleteEvent = (eventId: any) => {
        store.deleteEvent(eventId)
        setShowModal(false)
        toast.success('Evento deletado com sucesso!');
        return router.push('/agenda/eventos')
    }

    return (
        <div className="container">
            <Card padding="24px 24px 40px 30px">
                <Header event={event}/>

                <AddParticipant event={event} />

                {!event.participants.length ? (
                    <h3>Nenhum participante no evento.</h3>
                ) : (
                    <>
                        <ParticipantsListHeader nameSpace="eventDetails"/>
                        <div className={styles.participantsWrap}>
                            {event.participants?.length && event.participants?.map((participant: IParticipant) => (
                                <ListOfParticipants key={participant.id} eventId={id} participant={participant}
                                />
                            ))}
                        </div>
                    </>
                )}

            </Card>
            <div className="text-invert" style={{marginTop: 20}}>
                <Link href="/agenda/eventos">← Voltar</Link>
                <button
                    onClick={() => setShowModal(true)}
                    style={{
                        color: 'red',
                        float: 'right',
                        margin: 0,
                        background: 'transparent',
                        fontSize: '16px'
                }}
                >
                    Deletar Evento
                </button>
            </div>

            {showModal &&
                <Modal onClose={() => setShowModal(false)}>
                    <div className="text-center">
                        <h3>Tem certeza que deseja deletar o evento {event.title}?</h3>
                        <br/>
                        <p>Essa ação não pode ser desfeita!</p>
                        <Button
                            style={{
                                display: 'inline-block',
                                width: 'auto',
                                marginTop: '30px',
                                padding: '10px 30px'
                            }}
                            onClick={() => handleDeleteEvent(id)}
                        >Sim, excluir evento</Button>
                    </div>
                </Modal>
            }
        </div>
    )
}

