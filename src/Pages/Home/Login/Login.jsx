import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../Sheard/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)
        loginUser(email,password)
        .then(result=>{
            location.state ? navigate(location.state) : navigate('/')
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <NavBar />
            <div>
                <h1 className="text-3xl text-center ">Login your account</h1>

                <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center">Do Not Have An Account ? <Link className="text-blue-400" to={'/register'}>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;