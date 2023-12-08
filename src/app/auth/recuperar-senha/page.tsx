"use client";
import Input from "@/components/Input";
import Button from "@/components/Button";
import React, {FormEvent, useState} from "react";
import Link from "next/link";
import stylesAuth from "@/app/auth/Auth.module.scss";

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
            <Input
                label="Recuperar senha"
                placeholder="Digite seu e-mail"
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <Button type="submit" loading={loading}>Enviar nova senha</Button>

            <Link className={stylesAuth.link} href="/auth/login">Lembrou a senha?</Link>
        </form>
    </>
  )
}
