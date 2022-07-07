import React, {ChangeEvent, useState} from 'react';
import './FormQustions.scss'

type FormQustionsType = {
    titleButton: string
}

const FormQuestions = (props: FormQustionsType) => {
    const [value, setValue] = useState<boolean>(false);
    const disabledButton = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.checked)
    }
    return (
        <div className="pt-3">
            <div className="col" style={{color: "#000000", fontWeight: "300", fontSize: "20px"}}>
                <h2>Остались вопросы?</h2>
                <p>Если вы не нашли ответ на свой вопрос на нашем сайте, то можете написать его нашим
                    специалистам.</p>
                <div>
                    <form className="row">
                        <div className="col-sm-12 col-md-7 pt-2">
                            <input type="text" className="form-control form-control-lg" id="inputText"
                                   placeholder="Ваше имя"/>
                        </div>
                        <div className="col-sm-12 col-md-5 pt-2">
                            <input type="email" className="form-control form-control-lg" id="inputEmail4"
                                   placeholder="Ваш e-mail"/>
                        </div>
                        <div className="col-md-12 gy-2 pb-4">
                            <input className="form-control form-control-lg" style={{minHeight: "95px"}}
                                   placeholder="Задайте вопрос нашим специалистам" required/>
                        </div>
                        <div className="d-flex">
                            <div className=" col-md-1 col-sm-3 pe-3"><input className="" type="checkbox"
                                                                            onChange={disabledButton}/></div>
                            <div className="col-5 col-md-5 textAgreement">Я согласен на <a className="decor" href="">обработку
                                персональных данных</a></div>
                            <div className="col-6 col-md-6 text-center pe-2">
                                <button className="btn formButtonStyle" disabled={+value === 0}>{props.titleButton}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormQuestions;