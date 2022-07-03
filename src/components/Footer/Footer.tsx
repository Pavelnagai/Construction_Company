import React from 'react';
import './Footer.scss';
import gsk from '../../image/гск 1.png';
import {Link} from "react-router-dom";
import Vector189 from "../../image/Vector 189.png"

const Footer = () => {
    return (
        <div className="footer">
            {/*<div className="container">*/}
                <div className="row containerUL">
                    <div className="col-3" style={{fontSize: "9px"}}>
                        <img src={gsk} alt="gsk"/>
                        <p>ИНН: 7733332673</p>
                        <p>ОГРН: 1187746942118</p>
                        <p>Генеральный директор ООО «ГСК»
                            Дауров Тимур Борисович
                        </p>
                        <p>Юридический адрес: 125362, г. Москва, ул. Вишневая, д.2/14, кв.35</p>
                        <p>Фактический адрес: Пресненская наб., 8, стр. 1, Москва, Россия</p>

                    </div>
                    <div className="col-3 klas" >
                        <nav className="d-flex flex-column">
                            <Link to="/">Главная</Link>
                            <Link to={''}>О нас</Link>
                            <Link to={''}>Каталог</Link>
                            <Link to={''}>Доставка и оплата</Link>
                            <Link to={''}>Сотрудничество</Link>
                        </nav>
                    </div>
                    <div className="col-3">
                        <nav className="d-flex flex-column">
                            <Link className="text-decoration-none" to={''}>Прайс-лист </Link>
                            <Link className="text-decoration-none" to="/contactsList">Контакты</Link>
                            <Link className="text-decoration-none" to="/articles">Статьи</Link>
                            <Link className="text-decoration-none" to="">Сертификаты ГОСТ</Link>
                            <Link className="text-decoration-none" to="">Отзывы</Link>
                        </nav>
                    </div>
                    <div className="col-3">
                        <div>
                            <i className=""><img src={Vector189} alt=""/></i> +7(499)377-77-70
                            info@glavsk.ru
                            Пресненская наб., 8, стр. 1, Москва, Россия
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">© 2022 ГСК. Все права защищены.</div>
                    <div className="col-1">|</div>
                    <div className="col-4">Пользовательское соглашение</div>
                </div>
                <div className="row">
                    <div className="col-6" style={{fontSize: "7px"}}>
                        Все данные, представленные на сайте, носят сугубо информационный характер и не являются
                        исчерпывающими. Для более подробной информации следует обращаться к менеджерам компании по
                        указанным на сайте телефонам. Информация представленная на сайте, касающаяся стоимости
                        продукции, носит информационный характер и ни при каких условиях не является публичной офертой,
                        определяемой положениями пункта 2 статьи 437 Гражданского Кодекса Российской Федерации.
                        Указанные цены являются рекомендованными при покупке от 1000 м3 и могут отличаться от
                        действительных цен.
                    </div>
                </div>
            {/*</div>*/}
        </div>
    );
};

export default Footer;