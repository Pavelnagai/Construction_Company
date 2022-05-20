import React from 'react';
import './Main.scss';
import Polygon from '../../image/Polygon BG.png'

const Main = () => {
    return (
        <div>
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h1>Главная <br/> Строительная <br/> Компания</h1>
                            <p>Главная строительная компания, входит в Graal.group<br/> Специализируется на продаже
                                бетона и
                                чего-то там<br/> Доставляем и то се пятое десятое</p>
                            <button className="btn btn-warning">Заказать бетон</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainForm">
                <div className="container">
                    <h2 className="text-center">Хотите купить бетон?</h2>
                    <p className="text-center">Оставьте свои контакты и наши специалисты свяжутся с вами.</p>
                    <form className="form d-flex justify-content-center">
                        <div className="row">
                            <div className="col-6 d-flex"><input type="text" className="form-control"
                                                                 placeholder="Ваше имя"/>
                            </div>
                            <div className="col-6 d-flex">
                                <input type="text" className="form-control" placeholder="Ваш телефон"/>
                                <button className="btn btn-dark">Заказать звонок</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="footerMain d-flex justify-content-center align-items-center">
                <h2>Актуальный прайс на продукцию ГСК</h2>
            </div>
        </div>
    );
};

export default Main;