import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

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

if (process.env.NODE_ENV === "development") {
    mountStoreDevtool("CounterStore", useCounterStore);
}

export default useCounterStore;