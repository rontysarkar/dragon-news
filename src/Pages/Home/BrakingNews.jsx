import Marquee from "react-fast-marquee";

const BrakingNews = () => {
    return (
        <div className="flex my-4 bg-gray-200">
            <button className="btn btn-secondary">Braking News</button>
            <Marquee speed={100} pauseOnHover={true}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BrakingNews;