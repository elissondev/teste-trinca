import {SetState} from "zustand";
import {IEvent} from "@/types";

export interface AgendaSliceState {
    events: IEvent[]
    addEvent: (events: IEvent) => void
}

export const createAgendaSlice = (set: SetState<AgendaSliceState>): AgendaSliceState => ({
    events: [
        {
            id: 1,
            date: '01/12',
            title: 'Níver do Gui',
            numberOfUsers: 15,
            observation: 'Teste',
            participants: [
                {
                    id: 1,
                    name: "Ana Maria",
                    isItPaid: false,
                    contributionAmount: 0
                },
                {
                    id: 2,
                    name: "Ana Maria",
                    isItPaid: true,
                    contributionAmount: 10
                }
            ],
            value: 280
        },
        {
            id: 2,
            date: '23/12',
            title: 'Final de Ano',
            numberOfUsers: 28,
            participants: [],
            value: 400
        },
        {
            id: 3,
            date: '06/01',
            title: 'Sem motivo',
            numberOfUsers: 12,
            participants: [],
            value: 140
        }
    ],
    addEvent: (newEvent: IEvent) =>
        set((prevState: AgendaSliceState) => ({
            events: [...prevState.events, newEvent]
        }))
})