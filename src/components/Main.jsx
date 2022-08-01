import React from 'react';
import Logo from "../images/logo.png";
import Shape from "../images/shapes.png";
 
export default function Main() {
  return (
    <div className='main d-flex'>
        <div className="mainF d-xl-block d-lg-block d-none">
            <img src={Logo} alt="logo" className='mainLogo'/>
            <img src={Shape} alt="shapes" className='mainShape'/>
        </div>
        <div className="mainS">
            <div className="mainNav w-100 d-flex justify-content-xl-end justify-content-lg-end justify-content-between px-xl-5 px-1 py-3">
<img src={Logo} alt="logo" className='d-xl-none d-lg-none d-block mainNavLogo'/>
<button className='btn btn-outline-dark rounded-pill px-4'>Kirish</button>
            </div>
            <div className="mainContent pe-5 mt-xl-0 mt-3">
                <h1 className='mainTitle mb-4'>Kelajak kasbini bugundan o’rganishni boshlang!</h1>
                <p className='mainDesc mb-4'>Bizni kurslarimizda o’qib 3D sohasiga oid kasblarni mutahassisiga aylaning</p>
                <button className='btn btn-outline-dark rounded-pill px-4'>Boshlash</button>
            </div>
        </div>
    </div>
  )
}
