import BrakingNews from "./BrakingNews";
import Header from "./Sheard/Header";
import LeftSideNav from "./Sheard/LeftSideNav/LeftSideNav";
import NavBar from "./Sheard/NavBar";
import RightSideNav from "./Sheard/RightSideNav/RightSideNav";


const Home = () => {
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
                    <h1 className="text-3xl">middle section</h1>
                </div>
                <div className="border">
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;