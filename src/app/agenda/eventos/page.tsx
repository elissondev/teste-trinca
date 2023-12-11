"use client"
import React from "react";
import { useStore } from "@/store"
import { EventCard } from "@/components/Events/EventCard";
import AddBarbecue from "@/components/Events/AddBarbecue";
import Link from "next/link";

export default function Events() {
    const events = useStore((state) => state.events)

    return (
        <>
            <div className="container">
                <div className="grid">
                    {events.map(event => (
                        <Link href={`/agenda/evento/${event.id}`} className="col-12 col-md-8 col-lg-6">
                            <EventCard
                                key={event.id}
                                date={event.date}
                                title={event.title}
                                numberOfUsers={event.numberOfUsers}
                                value={event.value}
                                observation={event.observation}
                                participants={event.participants}
                                id={event.id}
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