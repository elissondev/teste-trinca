"use client";
import React, {useState} from "react";

import Card from "@/components/Card";
import EventParticipants from "./Steps/EventParticipants";
import {useStore} from "@/store";
import EventInformationForm from "./Steps/EventInformationForm";
import {Loader} from "@/components/Loader";

export default function NewEvent() {
    const [step, setStep] = useState(1)

    const handleSteps = () => {
        setStep(step + 1)
    }

    const renderSteps = () => {
        switch(step) {

            case 1:   return <EventInformationForm onSubmit={handleSteps}/>;
            case 2:   return <EventParticipants onBack={() => setStep(1)}/>;

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
