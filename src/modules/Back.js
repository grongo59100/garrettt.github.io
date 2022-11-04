import '../styles/Back.css';
import { Link, useLocation } from 'react-router-dom';
import {motion} from 'framer-motion';
import { useState } from 'react';

const backMotion = {
    from: {
        opacity: 0
    },
    to: {
        opacity: 1,
        transition: {
            duration: 1.5,
            delay: 1,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
            delay: 0,
            ease: "easeInOut"
        }
    },
    hover: {
        scale: 1.2
    },
    tap: {
        scale: 0.9
    }
}

function Back() {
    const [isClicked, click] = useState(false);

    return (
        <motion.div className="back" variants={backMotion} initial={"from"} animate={"to"} exit={"exit"} whileHover={"hover"} whileTap={"tap"}>
            <Link to="/_" onClick={() => click(isClicked => !isClicked)}>
                <i className="bi bi-arrow-left-circle-fill"></i>
            </Link>
        </motion.div>
        
    )
}

export default Back;