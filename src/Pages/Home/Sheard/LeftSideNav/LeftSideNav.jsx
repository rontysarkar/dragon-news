import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from '../../../../assets/1.png'
import img2 from '../../../../assets/2.png'
import img3 from '../../../../assets/3.png'

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div >
            <h1 className="text-xl font-semibold">All Category</h1>
            <h1 className="text-xl font-semibold text-center mt-6 p-4 bg-gray-100">National News</h1>
            <div className="space-y-4 ml-10 opacity-70 mt-6">
                {
                    categories.map(categorie => <Link className="block text-xl font-medium" key={categorie.id}>{categorie.name}</Link>)
                }
            </div>
            <div className=" mt-8">
                <img className="w-full" src={img1} alt="" />
                <p className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup </p>
                <div className="flex gap-4 mt-4">
                    <h1>sports</h1>
                    <p>jan 4,2022</p>

                </div>
            </div>
            <div className=" mt-8">
                <img className="w-full" src={img2} alt="" />
                <p className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup </p>
                <div className="flex gap-4 mt-4">
                    <h1>sports</h1>
                    <p>jan 4,2022</p>

                </div>
            </div>
            <div className=" mt-8">
                <img className="w-full" src={img3} alt="" />
                <p className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup </p>
                <div className="flex gap-4 mt-4">
                    <h1>sports</h1>
                    <p>jan 4,2022</p>

                </div>
            </div>

        </div>
    );
};

export default LeftSideNav;