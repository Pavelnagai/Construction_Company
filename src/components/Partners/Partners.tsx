import React from 'react';
import gazProm from '../../image/image 7.png'
import alfaBank from '../../image/image 8.png'
import federation from '../../image/image 6.png'
import russiaJD from '../../image/image 9.png'
import './Partners.scss'

const Partners = () => {
    return (
        <div className="d-md-flex align-items-md-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h1 className="d-none d-sm-block">25+</h1>
                        <div className="d-none d-sm-block">
                        <p >Партнёров Главной Строительной компании. Короткий екст про
                            сотрудничество и совместные
                            проекты</p>
                        </div>
                    </div>
                    <div className="col-sm-auto d-sm-none ">
                        <h2 className="text-center">Партнёры ГСК</h2>
                    </div>
                    <div className="col-sm-12 col-md-9">
                        <div className="row">
                            <div className="col-sm-6 col-md-3"><img  src={gazProm} alt="gazProm"/></div>
                            <div className="col-sm-6 col-md-3"><img   src={alfaBank} alt="alfaBank"/>
                            </div>
                            <div className="col-sm-6 col-md-3"><img  src={federation} alt="federation"/>
                            </div>
                            <div className="col-sm-6 col-md-3"><img  src={russiaJD} alt="russiaJD"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;