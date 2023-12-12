import {SetState} from "zustand";
import {IEvent, IParticipant} from "@/types";

type TypeUpdateContributionAmount = (
    eventId: any,
    participantId: any,
    newAmount: number,
    nameSpace: 'isItPaid' | 'contributionAmount'
) => void;

export interface AgendaSliceState {
    events: IEvent[];
    addEvent: (events: IEvent) => void;
    getEventById: (id: any) => any;
    updateContributionAmount: TypeUpdateContributionAmount;
}

const createUpdatedParticipant = (
    participant: IParticipant,
    newAmount: number,
    nameSpace: 'isItPaid' | 'contributionAmount'
): IParticipant => {
    if (nameSpace === 'isItPaid') {
        return {
            ...participant,
            isItPaid: !participant.isItPaid,
        };
    }

    if (nameSpace === 'contributionAmount') {
        return {
            ...participant,
            contributionAmount: newAmount,
            isItPaid: newAmount > 0 || false,
        };
    }

    return participant;
};

export const createAgendaSlice = (
    set: SetState<AgendaSliceState>,
    get: any
): AgendaSliceState => ({
    events: [],
    addEvent: (newEvent: IEvent) =>
        set((prevState: AgendaSliceState) => ({
            events: [...prevState.events, newEvent],
        })),
    getEventById: (eventId: number) =>
        get().events.find((event: IEvent) => event.id === eventId),
    updateContributionAmount: (eventId, participantId, newAmount, nameSpace) =>
        set((state) => {
            const eventToUpdate = state.events.find(
                (event: IEvent) => event.id === eventId
            );

            if (!eventToUpdate) {
                return state;
            }

            const updatedParticipants = eventToUpdate.participants.map(
                (participant: IParticipant) =>
                    participant.id === participantId
                        ? createUpdatedParticipant(participant, newAmount, nameSpace)
                        : participant
            );

            const updatedEvent = {
                ...eventToUpdate,
                participants: updatedParticipants,
            };

            const updatedEvents = state.events.map((event) =>
                event.id === eventId ? updatedEvent : event
            );

            return {
                events: updatedEvents,
            };
        }),
});