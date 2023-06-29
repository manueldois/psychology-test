import { promisify } from "util";
import questions from "@/data/questionarie.json";
import results from '@/data/results.json'

const setTimeoutPromise = promisify(setTimeout);

export const getQuestionIds = async () => {
    await setTimeoutPromise(1000);
    return questions.map(q => q.id)
}


export const getQuestion = async (id: string) => {
    await setTimeoutPromise(2000);
    return questions.find((q) => q.id === id);
};

export const getResult = async (id: string) => {
    await setTimeoutPromise(2000);
    return results.find((q) => q.id === id);
};