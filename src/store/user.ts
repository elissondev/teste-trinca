import { create } from "zustand"

type UserType = {
    id: number
    name: string,
    email: string
}

interface State {
    users: UserType[]
}

const useUserStore = create<State>((set) => ({
    users: []
}))

export default useUserStore