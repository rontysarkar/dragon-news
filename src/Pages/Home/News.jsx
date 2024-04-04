import { useParams } from "react-router-dom";
import BrakingNews from "./BrakingNews";
import Header from "./Sheard/Header";
import NavBar from "./Sheard/NavBar";
import RightSideNav from "./Sheard/RightSideNav/RightSideNav";

const News = () => {
    const { id } = useParams()
    return (
        <div>
            <Header />
            <BrakingNews />
            <NavBar />
            <div className="grid lg:grid-cols-4">
                <div className="col-span-3">
                    <h1 className="text-5xl">News Details {id}</h1>
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default News;