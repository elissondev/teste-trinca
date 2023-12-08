import React from "react";
import {EventCard} from "@/components/Events/EventCard";
import {IEvent} from "@/types";
import AddBarbecue from "@/components/Events/AddBarbecue";

export default function Events() {

    const data: IEvent[] = [
        {
            date: '01/12',
            title: 'Níver do Gui',
            numberOfUsers: 15,
            value: 280
        },
        {
            date: '23/12',
            title: 'Final de Ano',
            numberOfUsers: 28,
            value: 400
        },
        {
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
                        <div className="col-12 col-md-8 col-lg-6">
                            <EventCard
                                date={event.date}
                                title={event.title}
                                numberOfUsers={event.numberOfUsers}
                                value={event.value}
                            />
                        </div>
                    ))}
                    <div className="col-12 col-md-8 col-lg-6">
                        <AddBarbecue />
                    </div>
                </div>
            </div>
        </>
    )
}