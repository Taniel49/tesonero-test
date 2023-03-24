import Comments from "../Comments/Comments";
import FeaturesList from "../FeaturesList/FeaturesList";

function Container() {
    return (
        <div className="container">
            <Comments/>
            <FeaturesList/>
        </div>
    );
}

export default Container;