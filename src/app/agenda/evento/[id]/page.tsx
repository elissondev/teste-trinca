"use client"

import React, {useEffect} from "react";
import Card from "@/components/Card";
import Header from "@/app/agenda/evento/[id]/Header";
import ListOfParticipants from "@/app/agenda/evento/[id]/ListOfParticipants";
import {IEvent, IParticipant} from "@/types";
import {useStore} from "@/store";
import ParticipantsListHeader from "@/components/Events/ParticipantsListHeader";
import Link from "next/link";
interface Props {
    params: {
        id: string
    }
}

export default function Events({params: { id }}: Props) {
    const event: IEvent = useStore((state) => state.getEventById(id))

    return (
        <div className="container">
            <Card padding="24px 24px 40px 30px">
                <Header event={event}/>

                <ParticipantsListHeader nameSpace="eventDetails" />
                {event.participants?.length && event.participants?.map((participant: IParticipant) => (
                    <ListOfParticipants key={participant.id} id={id} participant={participant}
                    />
                ))}

            </Card>
            <Link className="link" href="/agenda/eventos">← Voltar</Link>
        </div>
    )
}

