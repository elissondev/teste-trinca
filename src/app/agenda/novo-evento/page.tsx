"use client";
import React, {useState} from "react";
import Card from "@/components/Card";
import FormData from "@/app/agenda/novo-evento/Steps/FormData";
import Button from "@/components/Button";
import {Participants} from "@/app/agenda/novo-evento/Steps/Participants";

export default function NewEvent() {
    const [step, setStep] = useState(1)

    const handleSteps = () => {
        setStep(step + 1)
    }

    const renderSteps = () => {
        switch(step) {

            case 1:   return <FormData />;
            case 2:   return <Participants />;

            default:  return <h1>Erro 404</h1>
        }
    }


    return (
      <div className="container">
          <Card padding="24px 24px 40px 30px">
              {renderSteps()}
              <Button type="submit" onClick={() => handleSteps()}>Próximo →</Button>
          </Card>
      </div>
  )
}
