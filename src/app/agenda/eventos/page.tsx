"use client"
import React, {useEffect} from "react";
import { useStore } from "@/store"
import { EventCard } from "@/components/Events/EventCard";
import AddBarbecue from "@/components/Events/AddBarbecue";
import Link from "next/link";
import {IEvent} from "@/types";

export default function Events() {
    const events = useStore((state) => state.events)

    const calculateTotalContribution = (event: IEvent) => {
        return event.participants.reduce(
            (total, participant) => (total += participant.contributionAmount || 0),
            0
        );
    }

    useEffect(() => {
        // @ts-ignore
        useStore.persist.rehydrate()
    }, []);

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
                                numberOfUsers={event.participants.length}
                                value={calculateTotalContribution(event)}
                                observation={event.observation}
                                participants={event.participants}
                                id={event.id}
                            />
                        </Link>
                    ))}
                    <div className={`col-12 col-md-8 col-lg-${!events.length ? '12' : '6'}`}>
                        <AddBarbecue/>
                    </div>
                </div>
            </div>
        </>
    )
}