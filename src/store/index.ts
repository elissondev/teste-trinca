"use client"

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { createUserSlice, UserSliceState } from '@/store/user'
import { createAgendaSlice, AgendaSliceState } from '@/store/agenda'
import { createEventSlice, CreateEventSliceState } from '@/store/agenda/newEvent'

type StoreSliceState = UserSliceState & AgendaSliceState & CreateEventSliceState;

const useStore = create<StoreSliceState>(
    <any>persist((set: any, get: any) => ({
        ...createUserSlice(set),
        ...createAgendaSlice(set, get),
        ...createEventSlice(set),
    }), {
        name: 'app-state', // Nome do item no localStorage
        storage: createJSONStorage(() => sessionStorage), // Objeto de armazenamento (pode ser sessionStorage se preferir)
        skipHydration: true
    })
);

export { useStore };