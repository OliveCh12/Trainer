import React from 'react'

interface Props {
    value: number,
    max: number,
}

const Progress = (props: Props) => {



    return <progress className="progress" value={props.value} max={props.max} />

}

export default Progress
