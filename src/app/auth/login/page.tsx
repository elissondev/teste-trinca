"use client";
import React, {FormEvent, useState} from 'react';
import Link from 'next/link'
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useRouter } from 'next/navigation'

export default function Login() {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
        <>
            <div className="wrap">

                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <Input
                            label="Login"
                            placeholder="e-mail"
                            type="email"
                            value={email}
                            required
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <Input
                            label="Senha"
                            placeholder="senha"
                            type="password"
                            value={password}
                            required
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        />
                    </div>

                    <Button type="submit" loading={loading}>Entrar</Button>
                </form>

                <Link className="link" href="/auth/recuperar-senha">Esqueceu a senha?</Link>

            </div>
        </>
    )
}
