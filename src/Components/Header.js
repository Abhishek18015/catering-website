import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className='Header'>

 
            <p>Gourmet au Catering</p>

            <ul>

                <li>
                   <Link to= "/" className='link'>Home</Link>
                </li>
                <li>
                 <Link to="/About" className='link'> About</Link> 
                </li>
                <li>
                    <Link to="/Ourmenu" className='link'>OurMenu</Link>
                </li>
                <li>
                   <Link to= "/Contact" className='link'>Contact</Link>
                </li>
                
            </ul>
        </div>


    );


}
export default Header;