import React from 'react';
import "./Main.scss"
import polygon1 from "../../image/main/Count 1.svg"
import {useAppSelector} from "../../store/redux/store";
import vector from "./../../image/svg/Arrow.svg"
import vector2 from "./../../image/mobile/Arrow.svg"
import photo1 from "./../../image/workGSK/Photo.png"
import photo2 from "./../../image/mobile/Photo.svg"
import work1 from "./../../image/workGSK/work-1.png"
import work2 from "./../../image/workGSK/work-2.png"
import work3 from "./../../image/workGSK/work-3.png"
import work4 from "./../../image/workGSK/work-4.png"
import InfoGSK from "../InfoGSK/InfoGSK";
import Articles from "../Articles/Articles";
import Footer from "../Footer/Footer";
import Contacts from "./Contacts/Contacts";
import Partners from "../Partners/Partners";
import DownloadMaterials from "../DownloadMaterals/DownloadMaterials";


const Main = () => {
    const dataTable = useAppSelector(state => state.concreteReducer)
    return (
        <>
            <div className="main">
                <div className="row containerIndex">
                    <div className="col-6 pt-5">
                        <h1>Главная Строительная Компания</h1>
                        <p>Главная строительная компания, входит в Graal.group Специализируется на продаже бетона и
                            чего-то
                            там Доставляем и то се пятое десятое</p>
                        <button className="btn btnWar">Заказать бетон</button>

                    </div>
                    <div className="row polygon">
                        <img className="col-md-3 img-fluid" src={polygon1} alt=""/>
                        <img className="col-md-3 img-fluid" src={polygon1} alt=""/>
                        <img className="col-md-3 img-fluid" src={polygon1} alt=""/>
                        <img className="col-md-3 img-fluid" src={polygon1} alt=""/>
                    </div>
                </div>
            </div>
            <div className="formBuyConcrete">
                <h2>Хотите купить бетон?</h2>
                <p>Оставьте свои контакты и наши специалисты свяжутся с вами.</p>
                <form>
                    <input className="form-control me-4" placeholder="Ваше имя" type="text"/>
                    <input className="form-control" placeholder="Ваш телефон" type="text"/>
                    <button className="btn">Заказать звонок</button>
                </form>
            </div>
            <div className="price">
                <div className="shapka">
                    <h2>Актуальный прайс на продукцию ГСК</h2>
                </div>
                <div className="row containerIndex">
                    <div className="col-12 col-lg-9">
                        <div className="d-flex priceCategories">
                            <div className="block">Товарный бетон</div>
                            <div className="block">Цементные растворы</div>
                            <div className="block block--active">Цементные смеси</div>
                            <div className="block">Аренда строительной техники</div>
                            <div className="block">Сыпучие материалы</div>
                        </div>
                        <div className="categories"><h5>Бетон на гравийном щебне</h5></div>
                        <table className="table text-center">
                            <thead>
                            <tr>
                                <th className="d-none d-md-block">Марка/Класс</th>
                                <th>Наименование</th>
                                <th>Цена с НДС</th>
                                <th>Количество кубов</th>
                            </tr>
                            </thead>
                            <tbody>
                            {dataTable.map(el => <tr key={el.id}>
                                <td className="d-none d-md-block">
                                    <div className="d-flex justify-content-evenly">
                                        <div>{el.stamp}</div>
                                        <div>{el.class}</div>
                                    </div>
                                </td>
                                <td>{el.name}</td>
                                <td>{el.price}</td>
                                <td>{el.quantity}</td>
                            </tr>)}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-3 order d-none d-lg-block">
                        <h3>Ваш заказ</h3>
                        <hr/>
                        <h5>Общий объём</h5>
                        <div className="scoreboard"> 1 &#13221;</div>
                        <h5>Стоимость</h5>
                        <div className="scoreboard">2 ₽</div>
                        <div>
                            <button className="btn btnWar">В корзину</button>
                            <button className="btn"></button>
                        </div>
                        <button className="btn btnWar">Оформить в один клик</button>
                        <button className="btn">Рассчитать доставку</button>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btnWar">Смотреть весь список</button>
                </div>
            </div>
            <div className="calc containerIndex">
                <div className="row">
                    <div className="col-6 col-md-6 p-3">
                        <h2>Рассчёт цены бетона с доставкой на карте</h2>
                        <img className="float-end" src={vector2} alt=""/>
                        <button className="btn bg-white">Калькулятор доставки</button>
                    </div>
                    <div className="col-md-3 d-none d-md-block">
                        <img className="img-fluid " src={vector} alt=""/>
                    </div>
                    <div className="col-3 photoOne">
                        <img style={{minHeight: "100%", borderRadius: "16px",}} className="img-fluid" src={photo1}
                             alt=""/>
                    </div>
                    <div className="col-6 photo2">
                        <img style={{minHeight: "100%", borderRadius: "16px",}} className="img-fluid " src={photo2}
                             alt=""/>
                    </div>
                </div>
            </div>
            <div className="works text-center containerIndex">
                <h2 className="col-sm-12 h2DataGsk">Работы, выполненные ГСК</h2>
                <div className="row row-cols-2 row-cols-md-4 pb-4">
                    <div className="mb-4"><img className="img-fluid" src={work1} alt="work1"/></div>
                    <div className=""><img className="img-fluid" src={work2} alt="work2"/></div>
                    <div className=""><img className="img-fluid" src={work3} alt="work3"/></div>
                    <div className=""><img className="img-fluid" src={work4} alt="work4"/></div>
                </div>
            </div>
            <InfoGSK/>
            <div className="work containerIndex">
                <div className="text-center">
                    <h2>Порядок работы</h2>
                    <p>Процесс реализации вашего заказа от начала и до конца.</p>
                </div>
                <h3>Заявка</h3>
                <p>Оставьте заявку любым удобным для вас способом –по e-mail, по телефону или закажите обратный звонок
                    на сайте.</p>
                <h3>Расчёт</h3>
                <p>Оставьте заявку любым удобным для вас способом –по e-mail, по телефону или закажите обратный звонок
                    на сайте.</p>
                <h3>Оплата</h3>
                <p>Оставьте заявку любым удобным для вас способом –по e-mail, по телефону или закажите обратный звонок
                    на сайте.</p>
                <h3>Производство</h3>
                <p>Оставьте заявку любым удобным для вас способом –по e-mail, по телефону или закажите обратный звонок
                    на сайте.</p>
                <h3>Доставка и разгрузка</h3>
                <p>Оставьте заявку любым удобным для вас способом –по e-mail, по телефону или закажите обратный звонок
                    на сайте.</p>
            </div>
            <Articles/>
            <DownloadMaterials/>
            <Partners/>
            <Contacts/>
            <Footer/>
        </>
    );
};

export default Main;