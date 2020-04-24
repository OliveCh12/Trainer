import React from 'react'

interface Props {

}

const Alert = (props: Props) => {
    return (
        <div className="alert">
            <div className="container">
                <div className="alert__body">
                    <p>You can customize your training by adding exercices et much more, enjoy !</p>
                </div>
            </div>
        </div>
    )
}

export default Alert
