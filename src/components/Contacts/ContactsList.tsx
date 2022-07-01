import React from 'react';
import Footer from "../Footer/Footer";
import imageScreenshot from "../../image/Снимок экрана 2022-03-26 в 23.30 2.png"
import MyComponent from "../Mao/Map";

const ContactsList = () => {
    return (
        <>
            <div className="container">
                <div>
                    <h3>Контакты</h3>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h3>ООО “ГСК”</h3>
                        <p>Общество с ограниченной ответственностью
                            «Главная Строительная Компания»
                        </p>
                        <h3>
                            Реквизиты
                        </h3>
                        <p>ИНН: 7733332673</p>
                        <p>ОГРН: 1187746942118</p>
                        <p>Генеральный директор ООО «ГСК»
                            Дауров Тимур Борисович

                        </p>
                        <p>
                            Юридический адрес: 125362, г. Москва, ул. Вишневая, д.2/14, кв.35
                        </p>
                        <p>Фактический адрес: Пресненская наб., 8, стр. 1, Москва, Россия</p>
                        <div className="col">
                            <h3>Остались вопросы?</h3>
                            <p>Если вы не нашли ответ на свой вопрос на нашем сайте, то можете написать его нашим
                                специалистам.</p>
                            <form className="row gy-4">
                                <div className="col-md-6">
                                    <input type="email" className="form-control form-control-lg" id="inputEmail4"
                                           placeholder="Ваше имя"/>
                                </div>
                                <div className="col-md-6">
                                    <input type="password" className="form-control form-control-lg" id="inputPassword4"
                                           placeholder="Ваш e-mail"/>
                                </div>
                                <div className="col-md-12">
                                    <textarea className="form-control form-control-lg "
                                              placeholder="Задайте вопрос нашим специалистам" required/>
                                </div>
                                <div className="row gy-3">
                                    <div className="col-1"><input type="checkbox"/></div>
                                    <div className="col-5">Я согласен на обработку персональных данных</div>
                                    <div className="col-6">
                                        <button className="btn btn-warning">Отправить письмо</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <img src={imageScreenshot} alt=""/>
                        </div>
                        <MyComponent/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ContactsList;