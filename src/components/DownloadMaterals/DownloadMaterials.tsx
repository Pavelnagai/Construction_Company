import React from 'react';
import img from "../../image/гск 1.png";
import './DownloadMaterials.scss'
import iconSvg from "../../image/svg/Illustration.svg"
import iconSvg2 from "../../image/svg/Ellipse 103.svg"

const DownloadMaterials = () => {
    return (
        <div className="downloadMaterials">
            <div className="container pt-5 pb-5 ">
                <h2 className="d-none d-sm-block">Скачать материалы ГСК</h2>
                <div className="row">
                    <div className="col-sm-12 col-md-6 ">
                        <div className="leftColumn  mb-3">
                            <div className="row d-flex justify-content-evenly align-items-center ">
                                <div className="col-4 col-md-5"><img className="img-fluid " src={iconSvg} alt=""/></div>
                                <div className="col-8 col-md-7">
                                    <h4 className="pb-3 mt-3">Вы можете скачать пример договора с ГСК</h4>
                                    <div className="btn btnWar pt-2 mb-3">Скачать договор</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="rightColumn ">
                            <div className="row">
                                <div className="col-4 col-md-6"><img className="img-fluid"
                                                                     src={iconSvg2} alt=""/></div>
                                <div className="col-8 col-md-6">
                                    <h4>Скачайте полный каталог продукции ГСК</h4>
                                    <div className="btn btnWar text-start mb-3">Скачать каталог</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadMaterials;
