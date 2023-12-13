"use client"

import React, { useState } from 'react';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

type Props = {
    children: React.ReactNode
};

export function Provider({children}: Props) {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                staleTime: 1000 * 60 * 30 // meia hora
            }
        }
    }))
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}