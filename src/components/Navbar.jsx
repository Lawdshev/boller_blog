import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link,useNavigate} from "react-router-dom";

function NavMenu() {
let [open,setOpen]=useState(false);
const [expanded, setExpanded] = useState(false)
  

return (
  <div className="bg-yellow-500">
    <header>
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className={!open? "flex items-center justify-between h-16 lg:h-20" : 'flex-col h-48 lg:h-20 lg:flex lg:items-center lg:justify-between'}>
                <div className={ !open? "flex-shrink-0" : 'absolute top-3 left-5 lg:flex-shrink-0'}>
                   <h1 className='text-3xl font-bold'>Boller</h1>
                </div>
                <button type="button" onClick={()=>setOpen(!open)} className="absolute top-2 right-5 p-2 text-black transition-all duration-200 rounded-md lg:hidden text-2xl">
                    <svg className="block w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
                    </svg>
                </button>
                <div className={!open?"hidden lg:flex lg:items-center lg:justify-around lg:space-x-10 w-[33%]": 'flex flex-col lg:flex lg:items-center lg:justify-center'}>
                    <Link to='/' onClick={()=>setOpen(false)} title="" className={!open? "text-black transition-all duration-200 hover:text-opacity-80 text-xl hover:text-yellow-200 focus:text-black font-semibold" :'mt-14 self-center "text-black transition-all duration-200 hover:text-opacity-80 text-xl hover:bg-yellow-300 hover:text-black focus:text-black font-semibold'}>Home </Link>
                    <Link to='/about' title="" onClick={()=>setOpen(false)} className={!open? "text-black transition-all duration-200 hover:text-opacity-80 text-xl hover:text-yellow-200 focus:text-black font-semibold" :'mt-14 self-center "text-black transition-all duration-200 hover:text-opacity-80 text-xl hover:text-yellow-200 focus:text-black font-semibold '}>About</Link>
                </div>
                <div className='flex items-center justify-center'>
                  <a href="#" title="" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:text-yellow-200 focus:text-black focus:bg-yellow-300 font-semibold " role="button"><i className='fa-brands fa-facebook text-2xl'></i> </a>
                  <a href="#" title="" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:text-yellow-200 focus:text-black focus:bg-yellow-300 font-semibold " role="button"><i className='fa-brands fa-twitter text-2xl'></i> </a>
                  <a href="#" title="" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:text-yellow-200 focus:text-black font-semibold" role="button"><i className='fa-brands fa-github text-2xl'></i> </a>
                </div>
            </div>
        </div>
    </header>
</div>

  );
}

{/* <Navbar className='bg-[#54d2d2] px-3'  expand="lg" expanded={expanded}>
<Container fluid className='flex justify-around w-full '>
  <Navbar.Brand  className='font-body text-3xl text-white'>Boller</Navbar.Brand>
  <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}/>
  <Navbar.Collapse className='flex flex-col justify-around lg:flex-row h-96 lg:h-fit' >
    <Nav
      className="pt-8 lg:pt-1 mx-auto w-3/5 h-3/5 items-center justify-between px-4 lg:ml-10 font-medium text-medium"
    >
      <Link to="/" onClick={() => setExpanded(false)}>Home</Link>
      <Link to="/About" onClick={() => setExpanded(false)}>About Us</Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar> */}

export default NavMenu;