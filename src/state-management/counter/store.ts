import { create } from "zustand";

interface ICounterStore {
    counter: number;
    increment: () => void;
    reset: () => void;
}

const useCounterStore = create<ICounterStore>(set => ({
    counter: 0,
    increment: () => { set(store => ({ counter: store.counter + 1 })) },
    reset: () => { set(() => ({ counter: 0 })) }
}));

export default useCounterStore;