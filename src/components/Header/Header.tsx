import React from 'react';
import img from '../../image/гск 1.png';
import ellipse from '../../image/Ellipse 102.png';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <a className="navbar-brand" href="#">
                            <img src={img} alt="" width="71" height="27"/>
                        </a>
                    </div>
                    <div className="col">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">О нас</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Каталог</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Доставка и оплата</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Контакты</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Статьи</a>
                                </li>
                            </ul>
                            <div className="">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <img src={ellipse} alt="mail"/>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </nav>
    );
};

export default Header;