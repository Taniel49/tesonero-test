import React from "react";
import Slider from "react-slick";
import {CustomArrow} from "../CustomArrow/CustomArrow";
import MainFeature from "../MainFeature/MainFeature";
import headphones from "../../images/headphones.svg";
import rectangle from "../../images/rectangle.svg";
import sheet from "../../images/sheet.svg";
import dot from "../../images/dot.svg";
import dotActive from "../../images/dot-active.svg"

export const CustomSlider = ({customArrowNextClassList, customArrowPrevClassList}) => {
    const [index, setIndex] = React.useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomArrow customArrowClassList={customArrowNextClassList}/>,
        prevArrow: <CustomArrow customArrowClassList={customArrowPrevClassList}/>,
        beforeChange: (prev, next) => {
            setIndex(next);
        },
        customPaging: (i) => (
            <div
                style={{
                    width: '8',
                    height: '8',
                }}
            >
                {i === index ? <img src={dotActive} alt='dot'/> : <img src={dot} alt='dot'/>}
            </div>
        )
    };
    return (
        <Slider {...settings}>
            <MainFeature src={headphones}/>
            <MainFeature src={rectangle}/>
            <MainFeature src={headphones}/>
            <MainFeature src={rectangle}/>
            <MainFeature src={sheet}/>
        </Slider>
    );
}
