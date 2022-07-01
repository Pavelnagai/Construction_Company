import React from 'react';
import Header from "../Header/Header";
import Polygon from "../../image/Polygon BG.png";
import "./Main.scss"
import InfoGsk from "../InfoGSK/InfoGSK";
import DataGsk from "../DataGSK/DataGSK";
import InfoGSK from "../InfoGSK/InfoGSK";
import Articles from "../Articles/Articles";
import Contacts from "./Contacts/Contacts";
import Partners from "../Partners/Partners";
import photoKatalog from "../../image/Ellipse 103.png"
import Footer from "../Footer/Footer";

const Main = () => {
    return (
        <div>
            {/*<Header/>*/}
            <div>
                <div>
                    <div className="main ">
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <h1>Главная Строительная Компания</h1>
                                    <p>Главная строительная компания, входит в Graal.group<br/> Специализируется на
                                        продаже
                                        бетона и
                                        чего-то там<br/> Доставляем и то се пятое десятое</p>
                                    <button className="btn btn-warning">Заказать бетон</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container row "
                         style={{position: "absolute", top: "500px", padding: "165px"}}>
                        <img className="col-3" src={Polygon} alt=""/>
                        <img className="col-3" src={Polygon} alt=""/>
                        <img className="col-3" src={Polygon} alt=""/>
                        <img className="col-3" src={Polygon} alt=""/>
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
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <div className="btn">1</div>
                    </div>
                    <div className="col-2">
                        <div className="btn">2</div>
                    </div>
                    <div className="col-2">
                        <div className="btn">3</div>
                    </div>
                    <div className="col-2">
                        <div className="btn">4</div>
                    </div>
                    <div className="col-2">
                        <div className="btn">5</div>
                    </div>
                </div>
                <div className=" d-flex justify-content-center">
                    <div className="btn btn-warning">Смотреть весь список</div>
                </div>
            </div>
            <DataGsk/>
            <InfoGSK/>
            <div className="container d-flex flex-column align-items-center">
                <h1>Порядок работы</h1>
                <p>Процесс реализации вашего заказа от начала и до конца.</p>
                <div className="row d-flex justify-content-center">
                    <div className="col-3">
                        <h4>Заявка</h4>
                        <p>Оставьте заявку любым удобным для вас способом –по e-mail, по телефону или закажите обратный
                            звонок на сайте.</p>
                    </div>
                    <div className="col-3">
                        <h4>Расчёт</h4>
                        <p>Наши специалисты рассчитают стоимость бетона и доставки, сделают счет или коммерческое
                            предложение.</p>
                    </div>
                    <div className="col-3">
                        <h4>Оплата</h4>
                        <p>Наличный и безналичный расчет. Предварительная оплата для юридических лиц. Скидки и особые
                            условия для постоянных клиентов.</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-3">
                        <h4>Производство</h4>
                        <p>Изготовление бетонной смеси или раствора на нашем РБУ, погрузка в автобетоносмеситель.
                            Контрольный звонок от диспетчера.</p>
                    </div>
                    <div className="col-3">
                        <h4>Доставка и разгрузка</h4>
                        <p>Доставка производится миксерами от 7 до 10 м3. Дополнительные условия поставки обговариваются
                            заранее.</p>
                    </div>
                </div>
            </div>
            <Articles/>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="bg-info">
                            <div className="row">
                                <div className="col-6"><img src={photoKatalog} alt=""/></div>
                                <div className="col-5 d-flex flex-column align-items-center justify-content-center">
                                    <h4>Вы можете скачать пример договора с ГСК</h4>
                                    <div className="btn btn-warning">Скачать договор</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="bg-light">
                            <div className="row">
                                <div className="col-6"><img src={photoKatalog} alt=""/></div>
                                <div className="col-5 d-flex flex-column align-items-center justify-content-center">
                                    <h4>Скачайте полный каталог продукции ГСК</h4>
                                    <div className="btn btn-warning">Скачать каталог</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Partners/>
            <Contacts/>
            <Footer/>

        </div>
    );
};

export default Main;