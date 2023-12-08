"use client";
import Card from "@/components/Card";
import Input from "@/components/Input";
import Button from "@/components/Button";
import React, {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import {Textarea} from "@/components/Textarea";

export default function NewEvent() {
    const router = useRouter()
    const [date, setDate] = useState('')
    const [title, setTitle] = useState('')
    const [observation, setObservation] = useState('')

    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = (e: FormEvent) => {
        setLoading(true)
        e.preventDefault()
        // Lidar com os dados do formulário
        setTimeout(() => {
            router.push('/agenda/eventos')
        }, 2000)
    };


  return (
      <div className="container">
          <Card padding="24px 24px 40px 30px">
              <h2 className="text-center">Novo Churras</h2>
              <br/><br/>

              <form onSubmit={handleSubmit}>
                  <Input
                      label="Data"
                      placeholder="Informe a data do evento"
                      type="date"
                      value={date}
                      required
                      onChange={e => setDate(e.target.value)}
                  />
                  <Input
                      label="Descrição"
                      placeholder="Digite a descrição do evento"
                      type="text"
                      value={title}
                      required
                      onChange={e => setTitle(e.target.value)}
                  />

                  <Textarea
                      label="Observações"
                      value={observation}
                      placeholder="Informe as observações do churras, caso tenha..."
                      onChange={v => setObservation(v.target.value)}
                  />

                  <Button type="submit" loading={loading}>Salvar</Button>
              </form>
          </Card>
      </div>
  )
}
