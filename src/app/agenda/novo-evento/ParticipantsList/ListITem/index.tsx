import React from 'react';
import styles from "@/app/agenda/novo-evento/ParticipantsList/ParticipantsList.module.scss";
import Input from "@/components/Input";
import {useStore} from "@/store";

export function ListITem() {
    const event = useStore((state) => state.event)
    const updatePrice = useStore(state => state.updateParticipantPrice)
    const removeParticipant = useStore(state => state.removeParticipant)

    const handleUpdatePriceWithDrink = (participantId: any, newPrice: number) => {
        updatePrice(participantId, 'priceWithDrink', newPrice);
    };

    const handleUpdatePriceWithoutDrink = (participantId: any, newPrice: number) => {
        updatePrice(participantId, 'priceWithoutDrink', newPrice);
    };

    // Remove um participante da lista
    const handleRemoveParticipant = (participantId: number) => {
        removeParticipant(participantId);
    };

    return (
        <>
            {event.participants.map((participant) => (
                <li className={styles.listItem} key={participant.id}>
                    <div className="grid">
                        <div className="col-9 col-sm-4 col-lg-4 text-invert">
                            <strong>{participant.name}</strong>
                        </div>
                        <div className="col-9 col-sm-3 col-lg-3">
                            <Input
                                className={styles.input}
                                label="Com Bebida"
                                placeholder="Valor com Bebida"
                                type="text"
                                value={participant.priceWithDrink}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    handleUpdatePriceWithDrink(
                                        participant.id,
                                        Number(e.target.value)
                                    )
                                }
                            />
                        </div>
                        <div className="col-9 col-sm-3 col-lg-3">
                            <Input
                                className={styles.input}
                                label="Sem Bebida"
                                placeholder="Valor sem Bebida"
                                type="text"
                                value={participant.priceWithoutDrink}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    handleUpdatePriceWithoutDrink(
                                        participant.id,
                                        Number(e.target.value)
                                    )
                                }
                            />
                        </div>
                        <div style={{ textAlign: 'right' }} className="col-5 col-sm-1 col-lg-2">
                            <button className={styles.removeBtn} onClick={() => handleRemoveParticipant(participant.id)}>
                                X
                            </button>
                        </div>
                    </div>
                </li>
            ))}
        </>
    );
}