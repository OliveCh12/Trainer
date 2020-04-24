import React from 'react'
import { Link } from 'react-router-dom'
import Timeline from './Timeline'

interface Props {

}

const Footer = (props: Props) => {
    return (
        <footer>
            <div className="footer__body">
                <Timeline />
                <Link to="/start" className="footer__button">
                    Start
                </Link>
            </div>
        </footer>
    )
}

export default Footer
