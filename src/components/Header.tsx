import React from 'react'
import { Link } from 'react-router-dom'


interface Props {

}

const Header = (props: Props) => {
    return (
        <header>
            <div className="header__body">
                <Link to="/">
                    <h1><strong>Bubble</strong> H.I.I.T</h1>
                </Link>

            </div>
        </header>
    )
}

export default Header
