import { create } from "zustand";

interface ICounterStore {
    counter: number;
    max: number;
    increment: () => void;
    reset: () => void;
}

const useCounterStore = create<ICounterStore>(set => ({
    counter: 0,
    max: 5,
    increment: () => { set(store => ({ counter: store.counter + 1 })) },
    reset: () => { set(() => ({ counter: 0 })) }
}));

export default useCounterStore;