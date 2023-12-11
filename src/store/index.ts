import { create } from 'zustand'

import { createUserSlice, UserSliceState } from '@/store/user'
import { createAgendaSlice, AgendaSliceState } from '@/store/agenda'
import { createEventSlice, CreateEventSliceState } from '@/store/agenda/newEvent'

type StoreSliceState = UserSliceState & AgendaSliceState & CreateEventSliceState;

export const useStore = create<StoreSliceState>((set) => ({
    ...createUserSlice(set),
    ...createAgendaSlice(set),
    ...createEventSlice(set),
}))