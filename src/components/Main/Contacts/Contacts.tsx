import React from 'react';
import './Contacts.scss';
import MyComponent from "../../Mao/Map";
import FormQuestions from "../../Forms/FormQuestions/FormQuestions";
import FormContacts from '../../Forms/FormContacts/FormContacts';


const Contacts = () => {
    return (
        <div className="container pb-5 contacts">
            <div className="row pt-5">
                <div className="col-md-5">
                    <h2>Контакты</h2>
                    <p className="d-md-none text-start textSm">Собственные бетонные заводы</p>
                    <MyComponent/>
                </div>
                <div className="formContactsSM">
                    <FormContacts/>
                </div>
                <div className="col-md-7">
                    <FormQuestions titleButton="Заказать звонок"/>
                </div>
            </div>
            <div className="d-none d-md-block">
                <FormContacts/>
            </div>
        </div>
    );
};

export default Contacts;