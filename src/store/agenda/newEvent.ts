import {SetState} from "zustand";
import {IEvent, IParticipant} from "@/types";

export interface CreateEventSliceState {
    event: IEvent
    updateEvent: (event: IEvent) => void
    addParticipant: (participant: IParticipant) => void
    removeParticipant: (id: any) => void
    updateParticipantPrice: (id: any, propertyName: 'priceWithDrink' | 'priceWithoutDrink', newPrice: number) => void
    clearEvent: () => void
}

const initialState = {
    id: 0,
    date: '',
    title: '',
    numberOfUsers: 0,
    observation: '',
    participants: [],
    value: 0
}

export const createEventSlice = (set: SetState<CreateEventSliceState>): CreateEventSliceState => ({
    event: initialState,
    updateEvent: (newEvent: IEvent) =>
        set(() => ({
            event: newEvent
        })),
    addParticipant: (participant: IParticipant) =>
        set((state) => ({
            event: {
                ...state.event,
                participants: [...state.event.participants, participant]
            }
        })),
    removeParticipant: (participantId: number) =>
        set((state) => {
            return {
                event: {
                    ...state.event,
                    participants: state.event.participants.filter(
                        (participant) => participant.id !== participantId
                    ),
                },
            };
        }),
    updateParticipantPrice: (participantId: any, propertyName: 'priceWithDrink' | 'priceWithoutDrink', newPrice: number) => {
        set((state) => {
            return {
                event: {
                    ...state.event,
                    participants: state.event.participants.map((participant) =>
                        participant.id === participantId
                            ? { ...participant, [propertyName]: newPrice }
                            : participant
                    ),
                },
            };
        });
    },
    clearEvent: () => {
        set({
            event: initialState,
        });
    }
})