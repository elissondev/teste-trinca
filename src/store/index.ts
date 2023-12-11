import { create } from 'zustand'

import { createUserSlice, UserSliceState } from '@/store/user'
import { createAgendaSlice, AgendaSliceState } from '@/store/agenda'

type StoreSliceState = UserSliceState & AgendaSliceState;

export const useStore = create<StoreSliceState>((set) => ({
    ...createUserSlice(set),
    ...createAgendaSlice(set),
}))