import {SetState} from "zustand";
import {IEvent, IParticipant} from "@/types";

export interface AgendaSliceState {
    events: IEvent[]
    addEvent: (events: IEvent) => void
    getEventById: (id: any) => any
    updateContributionAmount: (eventId: any, participantId: any, newPrice: number) => void
    updateIsItPaid: ( participantId: any, isItPaid: boolean) => void
}

export const createAgendaSlice = (set: SetState<AgendaSliceState>, get: any): AgendaSliceState => ({
    events: [],
    addEvent: (newEvent: IEvent) =>
        set((prevState: AgendaSliceState) => ({
            events: [...prevState.events, newEvent]
        })),
    getEventById: (eventId: number) => get().events.find((event: IEvent) => event.id === eventId),
    updateContributionAmount: (eventId, participantId: any, newAmount: number) => {
        set((state: AgendaSliceState) => {
            // Pega o evento a ser atualizado.
            const eventToUpdate = state.events.find((event: IEvent) => event.id === eventId);

            if (!eventToUpdate)
                return state; // Evento não encontrado, não fazemos nada (apenas retorna o estado atual)

            // Atualiza o estado do contributionAmount da lista dos participantes do evento em questão.
            const updatedParticipants = eventToUpdate.participants.map((participant: IParticipant) =>
                participant.id === participantId
                    ?
                    {
                        ...participant,
                        contributionAmount: newAmount,
                        isItPaid: newAmount > 0 || false
                    }
                    : participant
            );

            // Cria o payload atualizado do estado dos Eventos
            const updatedEvent = {
                ...eventToUpdate,
                participants: updatedParticipants,
            };

            // Atualiza o evento em questão
            const updatedEvents = state.events.map((event) =>
                event.id === eventId ? updatedEvent : event
            );

            return {
                events: updatedEvents
            };
        });
    },
    updateIsItPaid: (participantId: any, isItPaid: boolean) => {
        // @ts-ignore
        set((state: any) => {
            return {
                event: {
                    ...state.events,
                    participants: state.event.participants.map((participant: IParticipant) =>
                        participant.id === participantId ? { ...participant, isItPaid } : participant
                    ),
                },
            };
        });
    },
})