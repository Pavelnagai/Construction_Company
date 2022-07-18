import React from 'react';
import gazProm from '../../image/image 7.png'
import alfaBank from '../../image/image 8.png'
import federation from '../../image/image 6.png'
import russiaJD from '../../image/image 9.png'
import './Partners.scss'

const Partners = () => {
    return (
        <div className="containerIndex pt-5 pb-5">
            <div className="row">
                <div className="col-md-3 divOpenMd"><h2>25+</h2> <p>Партнёров Главной Строительной компании. Короткий
                    екст про сотрудничество и
                    совместные проекты</p></div>
                <div className="divOpenSm">
                    <h2 className="text-center">Партнёры ГСК</h2>
                </div>
                <div className="col-md-9 d-flex justify-content-evenly align-items-center row row-cols-2 row-cols-md-4">
                    <div><img className="img-fluid" src={gazProm} alt="gazProm"/></div>
                    <div><img className="img-fluid" src={alfaBank} alt="alfaBank"/></div>
                    <div><img className="img-fluid" src={federation} alt="federation"/></div>
                    <div><img className="img-fluid" src={russiaJD} alt="russiaJD"/></div>
                </div>
            </div>
        </div>
    );
};

export default Partners;