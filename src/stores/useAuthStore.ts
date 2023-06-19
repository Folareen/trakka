import { create } from "zustand";

type AuthState = {
    user: any,
    authenticate: (user: any) => void
}


const useAuthStore = create<AuthState>((set) => ({
    user: null,
    authenticate(user: any){
        set(state => ({
            user
        }))
    },
    logout(){
        set({user: null})
    }
}))

export default useAuthStore