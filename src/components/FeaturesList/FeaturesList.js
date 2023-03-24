import FeaturesListItem from "../FeaturesListItem/FeaturesListItem";
import thing from '../../images/small-thing.svg'
import led from '../../images/small-led.svg'
import lights from '../../images/small-lights.svg'
import splitter from '../../images/small-splitter.svg'
import power from '../../images/small-power.svg'
import React from "react";

function FeaturesList() {
    const [isClicked, setIsClicked] = React.useState(false);

    function onClick() {
        setIsClicked(!isClicked);
    }

    return (
        <section className="features-list">
            <div className="green-line"></div>
            <h2 className="features-list__header">Lorem ipsum, dolor sit adipisicing elit.</h2>
            <p className="features-list__text">Porro ab rerum omnis magnam eligendi error nobis dolore?</p>
            <ul className='features-list__list'>
                <FeaturesListItem src={thing}
                                  onClick={onClick}
                                  isClicked={isClicked}/>
                <FeaturesListItem src={led}
                                  onClick={onClick}
                                  isClicked={isClicked}/>
                <FeaturesListItem src={lights}
                                  onClick={onClick}
                                  isClicked={isClicked}/>
                <FeaturesListItem src={splitter}
                                  onClick={onClick}
                                  isClicked={isClicked}/>
                <FeaturesListItem src={power}
                                  onClick={onClick}
                                  isClicked={isClicked}/>
            </ul>
        </section>
    );
}

export default FeaturesList;