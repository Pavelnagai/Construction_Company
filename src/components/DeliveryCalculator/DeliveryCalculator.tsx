import React, {useState} from 'react';

const DeliveryCalculator = () => {
    const [valueWithDelivery, setValueWithDelivery] = useState<number>(546)
    const [valueWithoutDelivery, setValueWithoutDelivery] = useState<number>(234)
    return (
        <div className="containerIndex">
            <h1>Рассчёт стоимости бетона с доставкой</h1>
            <hr/>
            <div className="row">
                <div className="col-3 d-none d-sm-block">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-8">
                    <div>
                        <label htmlFor="adress">Адрес доставки:</label>
                        <input className="form-control form-control-lg" type="text" placeholder="Ермолино"/>
                    </div>
                    <div>
                        <label htmlFor="adress">Марка бетона:</label>
                        <input className="form-control form-control-lg" type="text" placeholder="М200 В15"/>
                    </div>
                    <div>
                        <label htmlFor="adress">Объём (м3):</label>
                        <input className="form-control form-control-lg" type="text" placeholder="Введите объём"/>
                    </div>
                    <div>
                        <label htmlFor="adress">Расстояние (км):</label>
                        <input className="form-control form-control-lg" type="text" placeholder="Введите расстояние"/>
                    </div>
                    <div className="row">
                        <button className="btn btn-warning col-sm-10 col-md-3">Рассчитать</button>
                        <p className="col-sm-10 col-md-9">Все рассчеты представлены в ознакомительных целях. Для точного рассчёта рекомендуем связаться с
                            нашими специалистами по телефону 8 (495) 502 2030</p>
                    </div>

                    <hr/>
                    <h5>Стоимость с доставкой:{valueWithDelivery}</h5>
                    <h5>Стоимость без доставки: {valueWithoutDelivery}</h5>
                    <div className="d-flex flex-column align-items-center justify-content-md-between flex-md-row-reverse">
                        <div>
                            <button className="btn btn-warning">Оформить заказ</button>
                        </div>
                        <div className="col-sm-8 col-md-6 d-md-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
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
    );
};

export default DeliveryCalculator;