import React, {ChangeEvent, useState} from 'react';
import AboutUsGsk69 from "../../image/Rectangle 4069.png"
import certificate1 from "../../image/124534 1.png";
import certificate2 from "../../image/124534 2.png";
import declaration1 from "../../image/Снимок экрана 2022-05-01 в 16.48 1.png";
import declaration2 from "../../image/Снимок экрана 2022-05-01 в 16.48 2.png";

const CertificatesAndGOST = () => {
    const [value, setValue] = useState<boolean>(false);
    const disableButton = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.checked)
    }
    return (
        <div className="container">
            <h2>Сертификаты и ГОСТы</h2>
            <hr/>
            <img className="img-fluid" src={AboutUsGsk69} alt=""/>
            <p>Покупая товарный бетон, обратите внимание на важный технический показатель его прочности, так как от
                этого зависит надежность, прочность и долговечность готовой монолитной конструкции. При подборе
                подходящего цементного раствора специалисты обращают внимание на классы и марки жидкого бетона,
                которые
                помогают понять, насколько материал подходит для проведения конкретных монолитных строительных
                работ.
                Хотя другие параметры готовой бетонной смеси БСГ (огнеупорность, водонепроницаемость,
                морозостойкость,
                подвижность) не менее значительные, отходят на второй план.</p>
            <div className="row">
                <div className="col-sm-6  col-md-4">
                    <img className="img-fluid" src={certificate1} alt=""/>
                    <h5>Сертификат ГОСТ на бетон </h5>
                </div>
                <div className="col-sm-6  col-md-4">
                    <img className="img-fluid" src={certificate2} alt=""/>
                    <h5>Сертификат ГОСТ на керамзитбетон, тощий бетон </h5>
                </div>
                <div className="col-sm-12  col-md-4">
                    <h3>Декларации</h3>
                    <p>Вы всегда можете проверить качество нашей продукции, так как помимо ГОСТов, мы имеем
                        современные
                        декларации на нашу продукцию, просто наведите камеру телефона или сканер на один из
                        QR-кодов:</p>
                    <div className="row">
                        <div className="col-6">
                            <img src={declaration1} alt=""/>
                            <p>Декларация на раствор</p>
                        </div>
                        <div className="col-6">
                            <img src={declaration2} alt=""/>
                            <p>Декларация на бетон</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="col">
                <h1>Остались вопросы?</h1>
                <p>Если вы не нашли ответ на свой вопрос на нашем сайте, то можете написать его нашим
                    специалистам.</p>
                <form className="row">
                    <div className="col-md-6">
                        <input type="text" className="form-control form-control-lg" id="inputText4"
                               placeholder="Ваше имя"/>
                    </div>
                    <div className="col-md-6">
                        <input type="email" className="form-control form-control-lg" id="inputEmail4"
                               placeholder="Ваш e-mail"/>
                    </div>
                    <div className="col-md-12 gy-3">
                        <input style={{height: "162px"}} className="form-control form-control-lg  "
                               placeholder="Задайте вопрос нашим специалистам" required/>
                    </div>
                    <div className="row gx-2 gy-2 pb-5">
                        <div className="d-flex justify-content-end align-items-center">
                            <input onChange={disableButton} type="checkbox"/>
                            Я согласен на обработку персональных данных
                            <button style={{width: "421px", marginLeft: "10px"}}
                                    className="btn btn-warning" disabled={+value === 0}>Отправить письмо</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CertificatesAndGOST;