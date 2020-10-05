import React, { useState } from 'react'

interface Props {
    title: string,
    sets: any,
    rest: number,
    reps: number,
    index: number,
}

const Task = (props: Props) => {

    function timeFormat(num: number) {
        const hours = Math.floor(num / 3600);
        const minutes = Math.floor((num - (hours * 3600)) / 60);
        const seconds = num - (hours * 3600) - (minutes * 60);
        return num >= 60 ? (`${minutes} min ${seconds}`) : (`${seconds} s`)
    }

    return (
        <div className="task">
            <div className="task__top">
                <h3 className="task__title">{props.title} <strong>x{props.reps}</strong></h3>
            </div>
            <div className="task__sets">
                {props.sets.map((set: any, index: number) => (
                    <div className={set.isCompleted ? 'task__set task__set--done' : 'task__set'}></div>
                ))}
            </div>
            <div className="task__bottom">
                <div className="task__element"><strong className="material-icons">autorenew</strong>{props.reps}</div>
                <div className="task__element"><strong className="material-icons">alarm</strong>{timeFormat(props.rest)}</div>
            </div>
        </div>
    )
}

export default Task
