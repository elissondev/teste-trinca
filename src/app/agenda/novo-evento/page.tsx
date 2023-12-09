"use client";
import React, {useState} from "react";
import Card from "@/components/Card";
import FormData from "@/app/agenda/novo-evento/Steps/FormData";
import Participants from "@/app/agenda/novo-evento/Steps/Participants";

export default function NewEvent() {
    const [step, setStep] = useState(1)

    const handleSteps = (v: any) => {
        console.log('v', v)
        setStep(step + 1)
    }

    const renderSteps = () => {
        switch(step) {

            case 1:   return <FormData onSubmit={handleSteps}/>;
            case 2:   return <Participants onBack={() => setStep(1)}/>;

            default:  return <h1>Erro 404</h1>
        }
    }

    return (
      <div className="container">
          <Card padding="24px 24px 40px 30px">
              {renderSteps()}
          </Card>
      </div>
  )
}
