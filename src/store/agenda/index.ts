import { SetState } from "zustand";
import { IEvent } from "@/types";

export interface AgendaSliceState {
    events: IEvent[]
    addEvent: (events: IEvent) => void
}

export const createAgendaSlice = (set: SetState<AgendaSliceState>): AgendaSliceState => ({
    events: [{
        id: 1,
        date: '01/12',
        title: 'Níver do Gui',
        numberOfUsers: 15,
        value: 280
    },
        {
            id: 2,
            date: '23/12',
            title: 'Final de Ano',
            numberOfUsers: 28,
            value: 400
        },
        {
            id: 3,
            date: '06/01',
            title: 'Sem motivo',
            numberOfUsers: 12,
            value: 140
        },],
    addEvent: (newEvent: IEvent) =>
        set((prevState: AgendaSliceState) => ({
            events: [...prevState.events , newEvent]
    }))
})