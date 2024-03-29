import "./Hero.css"
import wink from '../../images/pkat.png';
import { useState } from 'react';

export default function Hero (){
    const [animationEnded, setAnimationHasEnded] = useState(false);

    function animationHandler(){
        console.log('Animation Ended');
        setAnimationHasEnded(true);
    }

    const [animationEnded2, setAnimationHasEnded2] = useState(false);

    function animationHandler2(){
        console.log('Animation Ended');
        setAnimationHasEnded2(true);
    }


    return (
        <div className="hero_section">
            <div className="box">
                <div className="text-side">
                    <p className="text" onAnimationEnd={animationHandler}>
                    Hi, my name is Jorge. Welcome to my site. 
                    </p>

                    {animationEnded ? <p className="text" onAnimationEnd={animationHandler2}>
                    I'm a Software Engineering Student interested in
                    </p> : null}

                    {animationEnded2 ? <p className="text">
                    learning and making cool things.
                    </p> : null}
                </div>
            </div>
        </div>
    )
}