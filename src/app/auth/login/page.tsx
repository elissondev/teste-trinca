"use client";
import React, {FormEvent, useState} from 'react';
import Link from 'next/link'
import stylesAuth from '../Auth.module.scss'
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = (e: FormEvent) => {
        setLoading(true)
        e.preventDefault()
        // Lidar com os dados do formulário
        setTimeout(() => setLoading(false), 2000)
    };

    return (
        <>
            <div className={stylesAuth.wrap}>

                <form onSubmit={handleSubmit}>
                    <Input
                        label="Login"
                        placeholder="e-mail"
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        label="Senha"
                        placeholder="senha"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Button type="submit" loading={loading}>Entrar</Button>
                </form>

                <Link className={stylesAuth.link} href="/auth/recuperar-senha">Esqueceu a senha?</Link>


            </div>
        </>
    )
}
