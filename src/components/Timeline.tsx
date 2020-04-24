import React, { useContext } from 'react'
import { GlobalContext } from './context/GlobalContext'


interface Props {
    // tasks: any
}


// const Rest = () => {
//     const [tasks, setTasks] = useContext(GlobalContext)

//     const n = 10; // Or something else
//     [...Array(n)].map((e, i) => <div className="timeline__rest" key={i}></div>)
// }



const Timeline = (props: Props) => {
    const [tasks, setTasks] = useContext(GlobalContext)



    function HandleDuration() {
        const values = tasks.map((task: any) => task.rest)
        values.reduce((a: number, b: number) => a + b, 0)
        return values
    }

    // const sleep = (milliseconds: number) => {
    //     return new Promise(resolve => setTimeout(resolve, milliseconds))
    // }

    // const list = [1, 2, 3, 4]
    // const doSomething = async () => {
    //     for (const item of list) {
    //         await sleep(3000)
    //         console.log('🦄')
    //     }
    // }

    // doSomething()




    return (
        <div className="timeline">
            <div className="timeline__body">
                <div className="timeline__warmup"></div>
                {tasks.map((task: any, index: number) => (
                    <div className="timeline__item-container" key={index}>
                        <div className="timeline__item-set"></div>
                        <div className="timeline__item-rest"></div>
                        <div className="timeline__item-set"></div>
                        <div className="timeline__item-rest"></div>
                        <div className="timeline__item-set"></div>
                    </div>
                ))}
                <div className="timeline__warmup"></div>
            </div>
        </div>
    )
}

export default Timeline
