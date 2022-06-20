import create from 'zustand'
import { persist } from 'zustand/middleware'

const useCount = create(
    persist(
        (set, get) => ({
            count: 0,
            increment: () => set({
                count: get().count + 1
            }),
            decrement: () => set({
                count: get().count - 1
            }),
            reset: () => set({
                count: 0
            })
        }),
        { name: "counter" }
    )
)

export default useCount;