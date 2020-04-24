import React, { createContext, useState } from 'react'

interface Props {
    children: any
}

export const GlobalContext = createContext<any | undefined>(undefined);

export const GlobalProvider = (props: Props) => {
    const [state, setState] = useState([
        {
            name: "Push ups",
            sets: [{ isCompleted: false }, { isCompleted: false }, { isCompleted: false }],
            reps: 15,
            rest: 5,
            isCompleted: false,
        },
        {
            name: "Tricped Dips",
            sets: [{ isCompleted: false }, { isCompleted: false }, { isCompleted: false }, { isCompleted: false }],
            reps: 12,
            rest: 10,
            isCompleted: false,
        },
        {
            name: "Squats",
            sets: [{ isCompleted: false }, { isCompleted: false }, { isCompleted: false }],
            reps: 10,
            rest: 5,
            isCompleted: false,
        },
        {
            name: "Mountain Climbers",
            sets: [{ isCompleted: false }, { isCompleted: false }, { isCompleted: false }],
            reps: 15,
            rest: 5,
            isCompleted: false,
        },
    ]);

    return (
        <GlobalContext.Provider value={[state, setState]}>
            {props.children}
        </GlobalContext.Provider>
    )
}