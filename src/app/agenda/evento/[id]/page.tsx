import React from "react";
import Card from "@/components/Card";
import Header from "@/app/agenda/evento/[id]/Header";
import ListOfParticipants from "@/app/agenda/evento/[id]/ListOfParticipants";
import {IParticipants} from "@/types";
interface Props {
    params: {
        id: string
    }
}

export default function Events({params}: Props) {
    const participants: IParticipants[] = [
        {
            _id: 1,
            name: 'Alice',
            contributionAmount: 20,
            isItPaid: false
        },
        {
            _id: 2,
            name: 'Beto',
            contributionAmount: 20,
            isItPaid: false
        },
        {
            _id: 3,
            name: 'Diego B',
            contributionAmount: 20,
            isItPaid: true
        },
        {
            _id: 4,
            name: 'Diego P',
            contributionAmount: 10,
            isItPaid: false
        }
    ]

    return (
        <div className="container">
            <Card padding="24px 24px 40px 30px">
                <Header />

                {participants.map(item => (
                    <ListOfParticipants
                        _id={item._id}
                        name={item.name}
                        contributionAmount={item.contributionAmount}
                        isItPaid={item.isItPaid} />
                ))}

            </Card>
        </div>
    )
}

