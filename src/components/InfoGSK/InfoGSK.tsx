import React from 'react';
import constructor from "../../image/workGSK/builder-construction-vest-orange-helmet-standing-white-studio 1.png";
import './InfoGSK.scss';
const InfoGsk = () => {
    return (
        <div className="infoGsk">
        <div className="container-fluid">
            <div>
                <div className="row d-flex align-items-center">
                    <div className="col-6">
                        <img src={constructor} alt="constructor"/>
                    </div>
                    <div className="col-6">
                        <div>
                            <h3>О ГСК</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a
                            pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi,
                            risus in suscipit non. Non commodo volutpat, pharetra, vel.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default InfoGsk;