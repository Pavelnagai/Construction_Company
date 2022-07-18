import React from 'react';
import basketImg from '../../image/svg/Basket_light.svg'
import './Basket.scss'
import {useDispatch, useSelector} from "react-redux";
import {ChangeValueQuantity, ConcreteInitialStateType, concreteReducer} from "../../store/redux/reducers/concrete";
import {useAppSelector} from "../../store/redux/store";

const Basket = () => {
    const concrete = useAppSelector<ConcreteInitialStateType>(state => state.concreteReducer)
    const openWindow = concrete.filter(el => el.quantity > 0)
    const dispatch = useDispatch()
    const inc = (num: number, id: string) => {
        dispatch(ChangeValueQuantity(num, id))
    }
    const clearBasket = () => {
        openWindow.map(el => dispatch(ChangeValueQuantity(0, el.id)))
    }
    const clearTheName = (id: string) => {
        dispatch(ChangeValueQuantity(0, id))
    }
    return (
        <div className="basket">
            <div className="basketContainer">
                <h2>Корзина</h2>
                <hr/>
                {openWindow.length > 0 ?
                    <div className="basketName">
                        <div>
                            <div className="d-flex justify-content-between align-items-center p-2 bg-white">
                                <div>
                                    В корзине {openWindow.length} {openWindow.length === 1 ?
                                    "товар" : openWindow.length < 5 ?
                                        "товара" : "товаров"}
                                </div>
                                <div>
                                    <button className="btn" onClick={clearBasket}>Очистить</button>
                                </div>
                            </div>
                            <table className="table table-bordered">
                                <thead className="tableShapka">
                                <tr>
                                    <th style={{border: "none"}} scope="col">Наименование</th>
                                    <th style={{border: "none"}} scope="col">Цена с НДС</th>
                                    <th style={{border: "none"}} scope="col">Количество кубов</th>
                                </tr>
                                </thead>
                                <tbody>
                                {openWindow.map(el => <tr key={el.id}>
                                    <td>{el.name}</td>
                                    <td className="noTdSm">{el.price}m3</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-light me-1"
                                                    disabled={el.quantity === 0} onClick={() => {
                                                inc(el.quantity - 1, el.id)
                                            }}>-
                                            </button>
                                            <div
                                                className="d-flex justify-content-center align-items-center"
                                                style={{
                                                    background: "#CFCFCF",
                                                    minWidth: "40px",
                                                    minHeight: "40px",
                                                    borderRadius: "5px"
                                                }}

                                            >
                                                {el.quantity}

                                            </div>
                                            <button className="btn btn-light ms-1" onClick={() => {
                                                inc(el.quantity + 1, el.id)
                                            }}>+
                                            </button>
                                        </div>
                                    </td>
                                    <td>{el.price}
                                        <button className="btn btn-close" onClick={() => clearTheName(el.id)}/>
                                    </td>
                                </tr>)}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <div className="bg-white p-2 d-flex justify-content-between"><input
                                type="text"
                                placeholder="Введите промокод на скидку"/> ИТОГО:{openWindow.reduce((acc, el) => acc + (el.quantity * (Number.parseInt(el.price.replace(/\s/g, "")))), 0)}
                            </div>
                            <div className="d-flex justify-content-between mt-4">
                                <button className="btn btn-light">Заказать звонок</button>
                                <button className="btn btn-warning">Оформить заказ</button>
                            </div>
                        </div>
                    </div> :

                    <div className="noContentBasket">
                        <img className="img-fluid" src={basketImg} alt=""/>
                        <h5>Ваша корзина пуста</h5>
                        <p>Исправить это просто: выберите в каталоге интересующий товар и нажмите кнопку “В корзину”</p>
                        <div className="basketButton">
                            <button className="btn bg-light noButtonSm">Заказать звонок</button>
                            <button className="btn btnWar">Перейти в каталог</button>
                            <div className="contactsBasket">
                                <div className="d-flex flex-column  justify-content-md-between flex-md-row-reverse">
                                    <div className="col-sm-8 col-md-6 d-md-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             fill="currentColor"
                                             className="bi bi-telephone" viewBox="0 0 16 16">
                                            <path
                                                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                        </svg>
                                        {"\t+7(964) 578-14-83"}
                                    </div>
                                    <div>
                                        <button className="btn btn-secondary">Заказать звонок</button>
                                    </div>
                                </div>
                                <div className="col-sm-8 col-md-6 d-md-none ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         className="bi bi-chat-dots" viewBox="0 0 16 16">
                                        <path
                                            d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                        <path
                                            d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
                                    </svg>
                                    {"\tinfo@glavsk.ru"}
                                </div>
                                <div className="col-sm-8 col-md-6 d-md-none ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                    {"\tПресненская наб., 8, стр. 1, Москва, Россия"}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Basket;