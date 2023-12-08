import React from "react";
import {EventCard} from "@/components/Events/EventCard";
import {IEvent} from "@/types";
import AddBarbecue from "@/components/Events/AddBarbecue";
import Link from "next/link";

export default function Events() {

    const data: IEvent[] = [
        {
            _id: 1,
            date: '01/12',
            title: 'Níver do Gui',
            numberOfUsers: 15,
            value: 280
        },
        {
            _id: 2,
            date: '23/12',
            title: 'Final de Ano',
            numberOfUsers: 28,
            value: 400
        },
        {
            _id: 3,
            date: '06/01',
            title: 'Sem motivo',
            numberOfUsers: 12,
            value: 140
        },
    ]

    return (
        <>
            <div className="container">
                <div className="grid">
                    {data.map(event => (
                        <Link href={`/agenda/evento/${event._id}`} className="col-12 col-md-8 col-lg-6">
                            <EventCard
                                key={event._id}
                                date={event.date}
                                title={event.title}
                                numberOfUsers={event.numberOfUsers}
                                value={event.value}
                            />
                        </Link>
                    ))}
                    <div className="col-12 col-md-8 col-lg-6">
                        <AddBarbecue/>
                    </div>
                </div>
            </div>
        </>
    )
}