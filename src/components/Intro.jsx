import './Intro.css'
import { useEffect, useRef } from 'react';

const Intro = (props) => {

    const levelRef = useRef(null);

    useEffect(() => {
        if (levelRef.current) {
            levelRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="intro" ref={levelRef}>
            <div className='content'>
                {props.introContent}
            </div>
        </div>
    )
}

export default Intro;