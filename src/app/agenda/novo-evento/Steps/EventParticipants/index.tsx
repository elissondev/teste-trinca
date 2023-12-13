import React from 'react';
import toast from 'react-hot-toast';
import ParticipantsList from "@/app/agenda/novo-evento/ParticipantsList";
import Button from "@/components/Button";
import {useStore} from "@/store";
import {useRouter} from "next/navigation";
import AddParticipant from "@/components/Events/AddParticipant";

type Props = {
    onBack: () => void
};

export default function EventParticipants({onBack}: Props) {
    const router = useRouter()
    const event = useStore((state) => state.event)
    const addEvent = useStore((state) => state.addEvent)
    const clearEvent = useStore(state => state.clearEvent)

    const handleSaveEvent = () => {
        addEvent(event)
        toast.success('Evento criado com sucesso!');
        router.push('/agenda/eventos')
        clearEvent()
    }

    return (
        <>
            <h2 className="text-center text-invert">Novo Churras - Participantes</h2>
            <br/><br/>

            <AddParticipant />

            <ParticipantsList />

            <Button disabled={!event.participants.length} onClick={() => handleSaveEvent()}>Salvar</Button>

            <a className="link text-invert" onClick={() => onBack()}>Voltar</a>

        </>
    );
}