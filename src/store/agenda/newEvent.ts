import {SetState} from "zustand";
import {IEvent} from "@/types";

export interface CreateEventSliceState {
    event: IEvent
    updateEvent: (event: IEvent) => void
}

export const createEventSlice = (set: SetState<CreateEventSliceState>): CreateEventSliceState => ({
    event: {
        id: 0,
        date: '',
        title: '',
        numberOfUsers: 0,
        observation: '',
        participants: [],
        value: 0
    },
    updateEvent: (newEvent: IEvent) =>
        set(() => ({
            event: newEvent
        }))
})