import MainFeature from "../MainFeature/MainFeature";
import berries from '../../images/berries.svg';
import headphones from '../../images/headphones.svg';
import rectangle from '../../images/rectangle.svg';
import thing from '../../images/thing.svg';
import sheet from '../../images/sheet.svg';
import bubblesRight from '../../images/bubbles-right.svg';
import bubblesLeft from '../../images/bubbles-left.svg';
import {CustomSlider} from "../Slider/Slider";

function MainFeatures() {
    return (
        <section className="main-features">
            <div className='main-features__high-res'>
                <div className="green-line"></div>
                <h1 className="main-features__header">Lorem ipsum, dolor sit amet consectetur</h1>
                <div className="main-features__row">
                    <MainFeature src={headphones}/>
                    <MainFeature src={rectangle}/>
                </div>
                <div className="main-features__row">
                    <MainFeature src={sheet}/>
                    <img className="main-features__main-image" src={berries} alt={'berries'}/>
                    <MainFeature src={thing}/>
                </div>
                <div className="main-features__row">
                    <MainFeature src={headphones}/>
                    <MainFeature src={rectangle}/>
                </div>
                <img className="main-features__background-image-left" src={bubblesLeft} alt={'background'}/>
                <img className="main-features__background-image-right" src={bubblesRight} alt={'background'}/>
            </div>
            <div className='main-features__low-res'>
                <img className="main-features__main-image" src={berries} alt={'berries'}/>
                <h1 className="main-features__header">Lorem ipsum, dolor sit amet consectetur</h1>
                <div className="main-features__slider-container">
                    <CustomSlider customArrowNextClassList={'custom-arrow-next'}
                                  customArrowPrevClassList={'custom-arrow-prev'}/>
                </div>
            </div>
        </section>
    );
}

export default MainFeatures;