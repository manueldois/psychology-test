import { create } from 'zustand'

import { persist } from 'zustand/middleware'

interface PathState {
    path: string[]
    setPath: () => void
}

interface AnswersState {
    answers: string[]
    setAnswers: () => void
}

export const usePathStore = create<PathState>()(
    (set, get) => ({
        path: [],
        setPath: () => set((state) => ({ path: state.path }))
    })
)

export const useAnswersStore = create<AnswersState>()(
    (set, get) => ({
        answers: [],
        setAnswers: () => set((state) => ({ answers: state.answers }))
    })
)