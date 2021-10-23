import img from '../assets/got-logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Header'>
      <Link className='Link' to='/'>
        <img src={img} alt='Game of Thrones Logo' />
      </Link>
    </div>
  );
};

export default Header;
