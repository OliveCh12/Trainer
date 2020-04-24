import React from 'react'

interface Props {
    index: number,
    name: string,
    reps: number,
    rest: number,
    sets: number,
    isCompleted: boolean,
    handleRemove: any,
    handleDone: any,
}

const ListItem = (props: Props) => {

    const setsNumber = [...Array(props.sets)]

    function timeformat(num: number) {
        const hours = Math.floor(num / 3600);
        const minutes = Math.floor((num - (hours * 3600)) / 60);
        const seconds = num - (hours * 3600) - (minutes * 60);

        return num >= 60 ? (`${minutes} min ${seconds}`) : (`${seconds} s`)
    }


    return (
        <div className={props.isCompleted ? 'item item--disabled' : 'item'}>
            <div className="item__top">
                <div className="item__index">{props.index}</div>
                <h3 className="item__title">{props.name}</h3>
                <span className="material-icons item__remove" onClick={props.handleRemove}>remove_circle</span>
            </div>
            <div className="item__info">
                <div className="item_reps">Reps : <strong>{props.reps}</strong></div>
                <div className="item_reps">Sets : <strong>x3</strong></div>
                <div className="item_reps">Rest : <strong>{timeformat(props.rest)}</strong></div>
            </div>
        </div>
    )
}

export default ListItem
