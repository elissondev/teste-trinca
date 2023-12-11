import {SetState} from "zustand";
import {IEvent} from "@/types";

export interface AgendaSliceState {
    events: IEvent[]
    addEvent: (events: IEvent) => void
    getEventById: (id: any) => any
}

export const createAgendaSlice = (set: SetState<AgendaSliceState>, get: any): AgendaSliceState => ({
    events: [],
    addEvent: (newEvent: IEvent) =>
        set((prevState: AgendaSliceState) => ({
            events: [...prevState.events, newEvent]
        })),
    getEventById: (eventId: number) => get().events.find((event: IEvent) => event.id === eventId)
})