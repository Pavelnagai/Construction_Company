import React from 'react';
import './Contacts.scss';
import MyComponent from "../../Mao/Map";
import iconTelephone from '../../../image/Vector 189.png'
const Contacts = () => {
    return (
        <div className="contacts">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Контакты</h1>
                        <div style={{width: "535px", height: "372px", background: "black"}}>
                            <MyComponent/>
                        </div>
                    </div>
                    <div className="col">
                        <h1>Остались вопросы?</h1>
                        <p>Если вы не нашли ответ на свой вопрос на нашем сайте, то можете написать его нашим
                            специалистам.</p>
                        <form className="row">
                            <div className="col-md-6">
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Ваше имя"/>
                            </div>
                            <div className="col-md-6">
                                <input type="password" className="form-control" id="inputPassword4"
                                       placeholder="Ваш e-mail"/>
                            </div>
                            <div className="col-md-6">
                                    <textarea className="form-control"
                                              placeholder="Задайте вопрос нашим специалистам" required/>
                            </div>
                            <div className="row">
                                <div className="col-1"><input type="checkbox"/></div>
                                <div className="col-5">Я согласен на обработку персональных данных</div>
                                <div className="col-6">
                                    <button className="btn btn-warning">Отправить письмо</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 ">Пресненская наб., 8, стр. 1, Москва, Россия</div>
                    <div className="col-1">|</div>
                    <div className="col-3"><img src={iconTelephone} alt=""/> +7 (964) 578-14-83</div>
                    <div className="col-1">|</div>
                    <div className="col-3">info@glavsk.ru</div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;