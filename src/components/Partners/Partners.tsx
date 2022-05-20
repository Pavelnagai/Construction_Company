import React from 'react';
import gazProm from '../../image/image 7.png'
import alfaBank from '../../image/image 8.png'
import federation from '../../image/image 6.png'
import russiaJD from '../../image/image 9.png'
import './Partners.scss'

const Partners = () => {
    return (
        <div className="partners d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h1>25+</h1>
                        <p>Партнёров Главной Строительной компании. Короткий екст про сотрудничество и совместные
                            проекты</p>
                    </div>
                    <div className="col-9 imagePartners">
                        <div className="row">
                            <div className="col-3"><img className="img " src={gazProm} alt="gazProm"/></div>
                            <div className="col-3"><img src={alfaBank} alt="alfaBank"/>
                            </div>
                            <div className="col-3"><img src={federation} alt="federation"/>
                            </div>
                            <div className="col-3"><img src={russiaJD} alt="russiaJD"/>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Partners;