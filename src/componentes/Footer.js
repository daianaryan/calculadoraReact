
import React from 'react';

const Footer = () => {
    return (
        <div id='footer' className="container-fluid footer mt-4">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-0 p-0 d-block">          
                <div className="container-fluid">                
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">                                                
                        <div className="p-5 d-block">
                            <ul className="navbar-nav">                                    
                                <li className="nav-item">
                                    <button className="nav-link active bg-transparent border-0" aria-current="page" href="#"><i className="fab fa-instagram"></i></button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link active bg-transparent border-0" aria-current="page" href="#"><i className="fab fa-facebook"></i></button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link active bg-transparent border-0" aria-current="page" href="#"><i className="fab fa-tiktok"></i></button>
                                </li>                        
                            </ul>                            
                        </div>                                          
                    </div>                
                </div>
                <div><p className="divInput text-white text-center fw-light pb-3" >Maquetado web - Daiana Ryan</p></div>
            </nav>        
            <p className="divInput text-black text-center fw-light m-0 p-0" >
                <span className="material-symbols-outlined m-1 p-1">copyright</span></p>
        </div>
    );
};

export default Footer;
