"use client"
import { useEffect, useState } from 'react';

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
        <button onClick={toggleDarkMode}>
            {isDarkMode ? 'Desativar Modo Escuro' : 'Ativar Modo Escuro'}
        </button>
    );
};
