import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface PathState {
    path: string[]
    setPath: (path: string[]) => void
}

interface AnswersState {
    answers: string[]
    getAnswer: (i: number) => string | undefined
    setAnswers: (answers: string[]) => void
    setAnswer: (i: number, answers: string) => void
}

export const usePathStore = create<PathState>()(
    persist(
        (set, get) => ({
            path: [],
            setPath: (path) => set((state) => ({ path: path }))
        }),
        {
            name: 'path-storage',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
)

export const useAnswersStore = create<AnswersState>()(
    persist(
        (set, get) => ({
            answers: [],
            getAnswer: (i) => get().answers.at(i),
            setAnswer: (i, answer) => set(({ answers }) => {
                answers[i] = answer
                return { answers }
            }),
            setAnswers: (answers) => set((state) => ({ answers: answers }))
        }),
        {
            name: 'answers-storage',
            storage: createJSONStorage(() => sessionStorage),
        }

    )
)