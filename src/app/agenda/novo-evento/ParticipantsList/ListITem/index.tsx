import React, {useState} from 'react';
import styles from "@/app/agenda/novo-evento/ParticipantsList/ParticipantsList.module.scss";
import Input from "@/components/Input";

type Props = {
    item: { label: string, value: any }
    onRemove: (v: any) => void
};

export function ListITem({item, onRemove}: Props) {
    const [priceWithDrink, setPriceWithDrink] = useState(20)
    const [priceWithoutDrink, setPriceWithoutDrink] = useState(10)

    return (
        <>
            <li className={styles.listItem} key={item.value}>
                <div className="grid">
                    <div className="col-12 col-md-8 col-lg-4">
                        <strong>{item.label}</strong>
                    </div>
                    <div className="col-12 col-md-8 col-lg-3">
                        <Input
                            className={styles.input}
                            label="Com Bebida"
                            placeholder="Valor com Bebida"
                            type="text"
                            value={priceWithDrink}
                            onChange={e => setPriceWithDrink(e.target.value)}
                        />
                    </div>
                    <div className="col-12 col-md-8 col-lg-3">
                        <Input
                            className={styles.input}
                            label="Sem Bebida"
                            placeholder="Valor com Bebida"
                            type="text"
                            value={priceWithoutDrink}
                            onChange={e => setPriceWithoutDrink(e.target.value)}
                        />
                    </div>
                    <div style={{textAlign: 'right'}} className="col-12 col-md-8 col-lg-2">
                        <button className={styles.removeBtn} onClick={() => onRemove(item.value)}>X</button>
                    </div>
                </div>
            </li>
        </>
    );
}