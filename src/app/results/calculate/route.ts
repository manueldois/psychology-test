import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const { path, answers } = await request.json()

    const score = answers.reduce((acc: number, answer: string) => {
        const values = {
            A: 1,
            B: 2,
            C: 3,
            D: 4,
        };

        return acc + values[answer as keyof typeof values] || 0;
    }, 0);

    const result = Math.round(1 * (score / answers.length));

    return NextResponse.json({ resultId: result })
}