import React from 'react';
import imgDelivery from '../../image/Снимок экрана 2022-03-26 в 23.30 2-2.png'
import MyComponent from "../Mao/Map";

const Delivery = () => {
    return (
        <div className="container">
            <h2>Доставка и оплата</h2>
            <hr/>
            <div className="row">
                <div className="col-3">
                    <h4>Порядок доставки</h4>
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-7">
                            <p>Компания «ГСК» осуществляет доставку продукции собственным автопарком и транспортными
                                компаниями
                                по территории Москвы и Московской области. Учитывая логистические возможности ГСК, мы
                                готово
                                организовать доставку по оптимальным ценам в радиусе 200 км от Москвы.</p>
                            <h3>Доставка бетона </h3>
                        </div>
                        <div className="col-5">
                            <img src={imgDelivery} alt=""/>
                        </div>
                    </div>
                    <p>Доставка бетона от 1 куба. Для транспортировки бетонного раствора мы используем миксеры с разной
                        вместимостью. От клиента требуется своевременно освободить подъезд к объекту и подготовить
                        площадку для выгрузки. В случае простоя по вине заказчика, с него взымается неустойка в
                        соответствии с условиями компенсации, предусмотренными в договоре.
                    </p>
                    <p>
                        При необходимости предоставляется техника, укомплектованная оборудованием для подачи бетонной
                        смеси на расстояние. Итоговая стоимость доставки 1 куба бетона формируется, исходя из дальности
                        транспортировки, сложности подъезда, срочности выполнения заказа.
                    </p>
                    <div style={{border: "solid #CFCFCF", borderRadius: "5px", padding: "29px"}}
                         className="d-flex flex-column align-items-center">
                        <h4>Доставка осуществляется 24/7.</h4>
                        <h4>Мы доставим бетон на объект быстро и недорого.</h4>
                    </div>
                    <div>
                        <h5>Преимущества заказа бетона и растворов с доставкой в компании «ГСК» заключаются в:</h5>
                        <ul>
                            <li>наличии собственного автопарка;</li>
                            <li>налаженности сети заводов по всей Москве и Московской области;</li>
                            <li>демократичной ценовой политике;</li>
                            <li>оперативности выполнения заказа.</li>
                        </ul>
                        <h5>Оплатить услуги нашей фирмы можно любым удобным для клиента способом (безналичным платежом
                            или рассчитаться наличными после доставки продукции на объект).</h5>
                        <table className="table table-bordered">
                            <thead className="">
                            <tr className="table-secondary">
                                <th>Доставка</th>
                                <th>Цена с НДС руб/м3</th>
                            </tr>
                            </thead>
                            <tbody className="justify-content-end">
                            <tr>
                                <td>До 10 км</td>
                                <th>370</th>
                            </tr>  <tr>
                                <td>До 15 км</td>
                                <th>410</th>
                            </tr>  <tr>
                                <td>До 20 км</td>
                                <th>450</th>
                            </tr>  <tr>
                                <td>До 25 км</td>
                                <th>495</th>
                            </tr>  <tr>
                                <td>До 30 км</td>
                                <th>540</th>
                            </tr>  <tr>
                                <td>До 35 км</td>
                                <th>590</th>
                            </tr>  <tr>
                                <td>До 40 км</td>
                                <th>640</th>
                            </tr>
                            <tr>
                                <td>Более 40 км</td>
                                <th>685</th>
                            </tr>
                            </tbody>
                        </table>
                        <h4>Подробно рассчитать сумму доставки на нашу продукцию поможет наш менеджер после заполнения формы ниже:</h4>
                        <div>
                            <label htmlFor="adress">Адрес доставки:</label>
                            <input className="form-control" type="text" placeholder="Ермолино"/>
                        </div> <div>
                            <label htmlFor="adress">Марка бетона:</label>
                            <input className="form-control" type="text" placeholder="М200 В15"/>
                        </div> <div>
                            <label htmlFor="adress">Объём (м3):</label>
                            <input className="form-control" type="text" placeholder="Введите объём"/>
                        </div> <div>
                            <label htmlFor="adress">Телефон:</label>
                            <input className="form-control" type="text" placeholder="Введите телефон"/>
                        </div>
                        <button className="btn btn-warning">Рассчитать</button>
                        <h4>Компания «ГСК» доставляет продукцию по всей Москве и России.</h4>
                        <MyComponent/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Delivery;