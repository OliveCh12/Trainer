import React from 'react'
import { GlobalContext } from './context/GlobalContext'

interface Props {
    
}

const Stats = (props: Props) => {

    const [context, setContext] = React.useContext(GlobalContext)

    return (
        <div className="card">
            <h3>Number of exercices</h3>
            <span>{context.length}</span>
        </div>
    )
}

export default Stats
