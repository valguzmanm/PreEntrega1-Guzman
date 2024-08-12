import logo from '../assets/logoreal.png'
import { Link } from 'react-router-dom';

export const LogoReal = () => {
    return (
        <>
         <Link to="/">
        <img className="image" src={logo} height={27} alt="Logo" />
        </Link>
        </>

    )
    
}