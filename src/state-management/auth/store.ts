import { create } from "zustand";

interface IAuthStore {
    user: string;
    login: (name: string) => void;
    logout: () => void;
}

const useAuthStore = create<IAuthStore>((set) => ({
    user: "",
    login: (name: string) => { set(() => ({ user: name })) },
    logout: () => { set(() => ({ user: "" })) }
}));

export default useAuthStore;