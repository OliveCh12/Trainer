import React from 'react'
import { GlobalContext } from '../context/GlobalContext'


// Components
import CountDown from '../CountDown'
import Task from './Task'



interface Props {
    hours: any,
    minutes: any,
    seconds: any,
    completed: any
}

const Dashboard = () => {

    // Context of the dashboard
    const [context, setContext] = React.useContext(GlobalContext)

    // unCompleted Tasks
    const tasks = context.filter((task: any) => task.isCompleted === false)

    return (
        <main className="dashboard">
            <div className="container">
                <div className="dashboard__layout">

                    <div className="card">
                    <div className="tasks">
                        {tasks.slice(0, 1).map((task: any, index: number) => (
                            <Task title={task.name} sets={task.sets} rest={task.rest} reps={task.reps} index={index} />
                        ))}
                    </div>
                    </div>

                    <CountDown rest={10} />
                </div>
            </div>
        </main>
    )
}


export default Dashboard
