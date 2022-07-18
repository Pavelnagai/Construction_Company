import React from 'react';
import "./Main.scss"
import polygon1 from "../../image/main/Count 1.svg"
import {useAppSelector} from "../../store/redux/store";

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
                                <th>Марка/Класс</th>
                                <th>Наименование</th>
                                <th>Цена с НДС</th>
                                <th>Количество кубов</th>
                            </tr>
                            </thead>
                            <tbody>
                            {dataTable.map(el => <tr key={el.id}>
                                <td>
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
            </div>
        </>
    );
};

export default Main;