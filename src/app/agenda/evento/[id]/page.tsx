"use client"

import React from "react";
import Card from "@/components/Card";
import Header from "@/app/agenda/evento/[id]/Header";
import ListOfParticipants from "@/app/agenda/evento/[id]/ListOfParticipants";
import {IEvent, IParticipant} from "@/types";
import {useStore} from "@/store";
import ParticipantsListHeader from "@/components/Events/ParticipantsListHeader";
import Link from "next/link";
import {useRouter} from "next/navigation";

interface Props {
    params: {
        id: string
    }
}

export default function Events({params: {id}}: Props) {
    const router = useRouter()
    const event: IEvent = useStore((state) => state.getEventById(id))

    if (!id || !event)
        return router.push('/agenda/eventos')

    return (
        <div className="container">
            <Card padding="24px 24px 40px 30px">
                <Header event={event}/>

                {!event.participants.length ? (
                    <h3>Nenhum participante no evento.</h3>
                ) : (
                    <>
                        <ParticipantsListHeader nameSpace="eventDetails"/>
                        {event.participants?.length && event.participants?.map((participant: IParticipant) => (
                            <ListOfParticipants key={participant.id} eventId={id} participant={participant}
                            />
                        ))}
                    </>
                )}


            </Card>
            <Link className="link" href="/agenda/eventos">← Voltar</Link>
        </div>
    )
}

