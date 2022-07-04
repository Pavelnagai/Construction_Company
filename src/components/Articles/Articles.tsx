import React from 'react';
import cla from '../../image/Project Cover.png'
import bet from '../../image/Project Cover-1.png'
import './Articles.scss'

const Articles = () => {
    return (
        <div className="articles">
            <div className="container-fluid">
                <div className="container">
                    <h2>Актульные статьи</h2>
                    <div className="row">
                        <div className="col-6">
                            <h3>Как определяется класс бетона?</h3>
                            <img src={cla} alt=""/>
                            <div className="row">
                                <div className="col-6"><h6>Классы бетона</h6></div>
                                <div className="col-6">
                                    <button className="btn btn-warning">Читать полностью</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <h3>Марки бетона: характеристики</h3>
                            <img src={bet} alt=""/>
                            <div className="row">
                                <div className="col-6"><h6>Марки бетона</h6></div>
                                <div className="col-6">
                                    <button className="btn btn-warning">Читать полностью</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;