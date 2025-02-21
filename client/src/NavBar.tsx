import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';

function NavBar() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  //Disable scrolling when modal is open
  useEffect(() => {
    if(isRegisterOpen || isLoginOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => { document.body.classList.remove('modal-open');

     }
  }, [isRegisterOpen, isLoginOpen]);

    return (
      <>
          <div className="navbar">
            <nav className="main-nav">
              <div className="logo-wrapper">
                {/* <a href="#">
                  <img src="./images/logo.webp" alt="site-logo" className='page-logo' />
                </a> */}
                <h2>Bazinga</h2>
              </div>
              <ul className='main-nav-list'>
                <li>
                  <Link className="nav-links" to="/">Home</Link>
                </li>
                <li className="nav-links">Weather</li>
                <li className="nav-links">Flight Info</li>
                <li className="nav-links">Airlines</li>
                <li className="nav-links">Flight</li>
              </ul>
              <ul className='auth-nav-list'>
                <li className='nav-links' onClick={() => setIsRegisterOpen(true)}>Register</li>
                <li className='nav-links' onClick={() => setIsLoginOpen(true)}>Login</li>
              </ul>
            </nav>
          </div> 
              {/** Register Modal */}
              <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
              {/** Login Modal */}
              <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      </>
    );
};

export default NavBar;