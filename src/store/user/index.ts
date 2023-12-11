import { IUser } from "@/types"
import {SetState} from "zustand";
import {AgendaSliceState} from "@/store/agenda";

export interface UserSliceState {
    users: IUser[]
}

export const createUserSlice = (set: SetState<AgendaSliceState>): UserSliceState => ({
    users: []
})