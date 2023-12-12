"use client";
import Input from "@/components/Input";
import Button from "@/components/Button";
import React, {FormEvent, useState} from "react";
import Link from "next/link";

export default function RecoverPassword() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = (e: FormEvent) => {
        setLoading(true)
        e.preventDefault()
        // Lidar com os dados do formulário
        setTimeout(() => setLoading(false), 2000)
    };
  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <Input
                    label="Recuperar senha"
                    placeholder="Digite seu e-mail"
                    type="email"
                    value={email}
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
            </div>

            <Button type="submit" loading={loading}>Enviar nova senha</Button>

            <Link className="link" href="/auth/login">Lembrou a senha?</Link>
        </form>
    </>
  )
}
