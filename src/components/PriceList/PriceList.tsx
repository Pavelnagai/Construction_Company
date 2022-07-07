import React, {FormEvent, useEffect, useState} from 'react';
import Table from "../Table/Table";
import "./PriceList.scss"
import {useAppSelector} from "../../store/redux/store";
import {ConcreteInitialStateType} from "../../store/redux/reducers/concrete";

const PriceList = () => {
    const concrete = useAppSelector<ConcreteInitialStateType>(state => state.concreteReducer)
    const [active, setActive] = useState("Товарный бетон")
    const [valueTotalVolume, setValueTotalVolume] = useState<number>(0)
    let [valueCost, setValueCost] = useState<number>(0)
    const onChangeButtonActive = (e: FormEvent<HTMLDivElement>) => {
        setActive(e.currentTarget.innerHTML)
    }
    useEffect(() => {
        const valueVolume = concrete.reduce((acc, el) => acc + el.quantity, 0)
        const valueCost = concrete.reduce((acc, el) => acc + (el.quantity * (Number.parseInt(el.price.replace(/\s/g, "")))), 0)
        setValueTotalVolume(valueVolume)
        setValueCost(valueCost)
    }, [concrete])
    return (
        <div className="priceList">
            <div className="footerMain p-2 mb-5">
                <h2 className="text-center">Актуальный прайс на продукцию ГСК</h2>
            </div>
            <div className="container-fluid">
                <div className="d-flex">
                    <div className="col-sm-9 pe-md-5  tableStyle">
                        <div className="d-md-flex justify-content-between mb-2 ">
                            <div onClick={onChangeButtonActive}
                                 className={active === "Товарный бетон" ? "btn active " : "btn bg-white "}
                                 onChange={onChangeButtonActive}>Товарный бетон
                            </div>
                            <div onClick={onChangeButtonActive} onChange={onChangeButtonActive}
                                 className={active === "Цементные растворы" ? "btn active " : "btn bg-white"}>Цементные
                                растворы
                            </div>
                            <div onClick={onChangeButtonActive} onChange={onChangeButtonActive}
                                 className={active === "Цементные смеси" ? "btn active" : "btn bg-white"}>Цементные
                                смеси
                            </div>
                            <div onClick={onChangeButtonActive} onChange={onChangeButtonActive}
                                 className={active === "Аренда строительной техники" ? "btn active" : "btn bg-white"}>Аренда
                                строительной техники
                            </div>
                            <div onClick={onChangeButtonActive} onChange={onChangeButtonActive}
                                 className={active === "Сыпучие материалы" ? "btn active" : "btn bg-white"}>Сыпучие
                                материалы
                            </div>
                        </div>
                        <Table/>
                        <div className=" d-flex justify-content-center mb-5">
                            <div className="btn btnWar">Смотреть весь список</div>
                        </div>
                    </div>
                    <div className=" d-none d-sm-block d-md-inline-block  bg-white m-md-3 mt-md-0 "
                         style={{borderRadius: "5px", height: "100%"}}>
                        <div className="container">
                            <h4 className="text-center mt-2">Ваш заказ</h4>
                            <hr/>
                            <p><strong>Общий объём</strong>
                                <div className="text-center">
                                    {valueTotalVolume} m3
                                </div>

                            </p>
                            <p><strong>Стоимость</strong>
                                <br/>
                                <div className="text-center">{valueCost} ₽</div>

                            </p>
                            <button className="btn btnWar m-1">В корзину</button>
                            <button className="btn btn-light m-1">x</button>
                            <button className="btn btnWar m-1">Оформить в один клик</button>
                            <button className="btn btn-light m-1">Рассчитать доставку</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceList;