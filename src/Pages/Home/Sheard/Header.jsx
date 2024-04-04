import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center space-y-2'>
            <img className='mx-auto' src={logo} alt="" />
            <h1>Journalism Without Fear or Favour</h1>
            <h1 className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</h1>
        </div>
    );
};

export default Header;