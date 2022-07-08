import React from 'react';
import constructor from "../../image/Project Cover.svg"
import constructor2 from "../../image/svg/Ellipse 46.svg"
import './InfoGSK.scss';

const InfoGsk = () => {
    return (
        <div className="infoGsk row">
            <div className="col-md-6">
                <img className="img-fluid d-none d-sm-block" src={constructor} alt="constructor"/>
                <img className="pt-2 imgSm" style={{position: "absolute", left: "20px"}} src={constructor2} alt=""/>
            </div>

            <div className="col-md-4 d-flex flex-column justify-content-center">
                <h2 className="text-center text-md-start h2InfoGsk p-2 p-md-0">О ГСК</h2>
                <p className="text-sm-start textDecor">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Condimentum diam orci pretium a
                    pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate.
                    Nisi,
                    risus in suscipit non. Non commodo volutpat, pharetra, vel.</p>
            </div>
        </div>
    );
};

export default InfoGsk;

