import {SetState} from "zustand";
import {IEvent, IParticipant} from "@/types";

type TypeUpdateContributionAmount = (
    eventId: any,
    participantId: any,
    newAmount: number,
    nameSpace: 'isItPaid' | 'contributionAmount'
) => void;

type TyUpdateEventDetails = (
    eventId: any,
    details: { title?: string; date?: string; observation?: string }
) => void

export interface AgendaSliceState {
    events: IEvent[];
    addEvent: (events: IEvent) => void;
    getEventById: (id: any) => any;
    updateContributionAmount: TypeUpdateContributionAmount;
    removeParticipantFromEvent: (eventId: any, participantId: any) => void
    updateEventDetails: TyUpdateEventDetails

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

            // Pega o evento a ser atualizado.
            const eventToUpdate = state.events.find(
                (event: IEvent) => event.id === eventId
            );

            if (!eventToUpdate) {
                return state;  // Evento não encontrado, não fazemos nada (apenas retorna o estado atual)
            }

            // Atualiza o estado do contributionAmount ou isItPaid da lista dos participantes do evento em questão, com base no nameSpace.
            const updatedParticipants = eventToUpdate.participants.map(
                (participant: IParticipant) =>
                    participant.id === participantId
                        ? createUpdatedParticipant(participant, newAmount, nameSpace)
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
                events: updatedEvents,
            };
        }),
    removeParticipantFromEvent: (eventId, participantId) =>
        set((state: any) => {

            // Pega o evento a ser atualizado.
            const eventToUpdate = state.events.find(
                (event: IEvent) => event.id === eventId
            );

            if (!eventToUpdate) {
                return state;  // Evento não encontrado, não fazemos nada (apenas retorna o estado atual)
            }

            // Remove o participante da lista dos participants
            const updatedParticipants = eventToUpdate?.participants
                .filter((participant: IParticipant) =>
                     participant.id !== participantId
            );

            // Cria o payload atualizado do estado dos Eventos
            const updatedEvent = {
                ...eventToUpdate,
                participants: updatedParticipants,
            };

            // Atualiza o evento em questão
            const updatedEvents = state.events.map((event: IEvent) =>
                event.id === eventId ? updatedEvent : event
            );

            return {
                events: updatedEvents,
            };

        }),
    updateEventDetails: (eventId, details) => {
        set((state) => {
            const updatedEvents = state.events.map((event) =>
                event.id === eventId
                    ? {
                        ...event,
                        title: details.title !== undefined ? details.title : event.title,
                        date: details.date !== undefined ? details.date : event.date,
                        observation: details.observation !== undefined ? details.observation : event.observation,
                    }
                    : event
            );

            return {
                events: updatedEvents,
            };
        });
    },
});