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
            <div className="footerMain d-flex justify-content-center align-items-center mb-5">
                <h2>Актуальный прайс на продукцию ГСК</h2>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-8 tableStyle">
                        <div className="d-md-flex">
                            <div onClick={onChangeButtonActive}
                                 className={active === "Товарный бетон" ? "btn active m-1 ms-0" : "btn bg-white m-1 ms-0"}
                                 onChange={onChangeButtonActive}>Товарный бетон
                            </div>
                            <div onClick={onChangeButtonActive} onChange={onChangeButtonActive}
                                 className={active === "Цементные растворы" ? "btn active m-1 ms-0" : "btn bg-white m-1 ms-0"}>Цементные
                                растворы
                            </div>
                            <div onClick={onChangeButtonActive} onChange={onChangeButtonActive}
                                 className={active === "Цементные смеси" ? "btn active m-1 ms-0" : "btn bg-white m-1 ms-0"}>Цементные
                                смеси
                            </div>
                            <div onClick={onChangeButtonActive} onChange={onChangeButtonActive}
                                 className={active === "Аренда строительной техники" ? "btn active m-1 ms-0" : "btn bg-white m-1 ms-0"}>Аренда
                                строительной техники
                            </div>
                            <div onClick={onChangeButtonActive} onChange={onChangeButtonActive}
                                 className={active === "Сыпучие материалы" ? "btn active m-1 ms-0" : "btn bg-white m-1 ms-0"}>Сыпучие
                                материалы
                            </div>
                        </div>
                        <div className="d-none d-sm-block text-center bg-white mb-1 " style={{
                            borderRadius: "5px",
                            fontSize: "21px",
                            lineHeight: "25,71px",
                            padding: "7px",
                            fontWeight: "500"
                        }}>
                            Бетон на гравийном щебне
                        </div>
                        <Table/>
                        <div className=" d-flex justify-content-center">
                            <div className="btn btn-warning">Смотреть весь список</div>
                        </div>
                    </div>
                    <div className="col-md-3 d-none d-sm-block">
                        <div className="container">
                            <h4>Ваш заказ</h4>
                            <hr/>
                            <p><strong>Общий объём</strong>
                                <br/>
                                {valueTotalVolume} m3
                            </p>
                            <p><strong>Стоимость</strong>
                                <br/>
                                {valueCost} ₽
                            </p>
                            <button className="btn btn-warning m-1">В корзину</button>
                            <button className="btn btn-light m-1">x</button>
                            <button className="btn btn-warning m-1">Оформить в один клик</button>
                            <button className="btn btn-light m-1">Рассчитать доставку</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceList;