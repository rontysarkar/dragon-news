import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZonoe1 from '../../../../assets/qZone1.png'
import qZonoe2 from '../../../../assets/qZone2.png'
import qZonoe3 from '../../../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div className="px-4" >
            <div className="mb-10" >
                <h1 className="text-2xl font-semibold">Login With</h1>
                <button className="btn btn-outline w-full mb-2 mt-4">
                    <FaGoogle />
                    Login With Google</button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Login With GitHub</button>
            </div>
            <div >
                <h1 className="text-2xl font-semibold mb-5">Find Us On</h1>
                <a className="flex items-center text-lg gap-2 p-2 px-4 border" href=""> <FaFacebook /> Facebook</a>
                <a className="flex items-center text-lg gap-2 p-2 px-4 border" href=""> <FaTwitter /> Facebook</a>
                <a className="flex items-center text-lg gap-2 p-2 px-4 border" href=""> <FaInstagram /> Facebook</a>
            </div>
            <div className="mt-10" >
                <h1 className="text-2xl font-semibold">Q Zone</h1>
                <img src={qZonoe1} alt="" />
                <img src={qZonoe2} alt="" />
                <img src={qZonoe3} alt="" />

            </div>
        </div>
    );
};

export default RightSideNav;