import React, {useEffect} from 'react';
import arrow from '../../images/arrow-down.svg'

function FeaturesListItem({src, onClick, isClicked}) {
    const [isDescription, setIsDescription] = React.useState(false);
    const [isClickedHere, setIsClickedHere] = React.useState(false);

    useEffect(() => {
        if (isClickedHere) {
            setIsClickedHere(false)
        } else {
            setIsDescription(false)
        }
    }, [isClicked]);

    return (
        <li className="list-item">
            <button className="list-item__main" onClick={() => {
                onClick();
                setIsDescription(!isDescription);
                setIsClickedHere(!isClickedHere);
            }}>
                <div className="list-item__container">
                    <img className="list-item__feature-image" src={src} alt='feature'/>
                    <p className="list-item__feature-name"
                       style={isDescription ? {color: '#00C368'} : {color: '#2E3A59'}}>Lorem ipsum, dolor sit amet
                        adipisicing elit.</p>
                </div>
                <img src={arrow} alt='arrow' style={isDescription ? {transform: 'rotate(180deg)'} : {}}/>
            </button>
            <p className="list-item__feature-description"
               style={isDescription ? {display: 'block'} : {display: 'none'}}>Laboriosam quas, aut consectetur animi
                autem aliquid consequuntur suscipit exercitationem laborum
                cupiditate magnam eaque quae delenit</p>
        </li>
    );
}

export default FeaturesListItem;
