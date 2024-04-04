import { useLoaderData } from "react-router-dom";
import BrakingNews from "./BrakingNews";
import Header from "./Sheard/Header";
import LeftSideNav from "./Sheard/LeftSideNav/LeftSideNav";
import NavBar from "./Sheard/NavBar";
import RightSideNav from "./Sheard/RightSideNav/RightSideNav";
import HomeNewsCard from "./HomeNewsCard";


const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <Header />
            <BrakingNews />
            <NavBar />
            <div className=" grid md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav />
                </div>
                <div className="col-span-2 border">
                    {
                        news.map(aNews => <HomeNewsCard aNews={aNews} key={aNews._id} />)
                    }
                </div>
                <div className="border">
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;