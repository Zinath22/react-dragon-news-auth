import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">
             Breaking News
            </button>
            <Marquee pauseOnHover={true} speed={70}>
<Link className="mr-12" to="/">  I can be a React component, multiple React components......</Link>
<Link to="/">  I can be a React component, multiple React components......</Link>
<Link to="/">  I can be a React component, multiple React components......</Link>
</Marquee>
        </div>
    );
};

export default BreakingNews;