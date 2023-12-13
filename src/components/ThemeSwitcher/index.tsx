"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
export default function ThemeSwitcher() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Verifica se há suporte à API matchMedia
        if (window.matchMedia) {
            // Adiciona um ouvinte para detectar mudanças no esquema de cores preferido
            const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

            // Função para lidar com a mudança no esquema de cores preferido
            const handleDarkModeChange = (e: any) => {
                setIsDarkMode(e.matches);
            };

            // Chama a função de manipulação inicial
            handleDarkModeChange(darkModeMediaQuery);

            // Adiciona o ouvinte de alteração para responder a mudanças no esquema de cores preferido
            darkModeMediaQuery.addListener(handleDarkModeChange);
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        // Atualiza o corpo do documento com a classe do modo escuro
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        <div className="theme-switcher" title={isDarkMode ? 'Desativar Modo Escuro' : 'Ativar Modo Escuro'}>
            {isDarkMode ?
                <button
                    onClick={toggleDarkMode}
                    className="dark">
                    <Image
                        src="/images/contrast.png"
                        alt="Desativar modo escuro"
                        width={28}
                        height={28}
                        priority
                    />
                </button>
                :
                <button onClick={toggleDarkMode} className="light">
                    <Image
                        src="/images/contrast.png"
                        alt="Ativar modo escuro"
                        width={28}
                        height={28}
                        priority
                    />
                </button>
            }
        </div>
    );
};
