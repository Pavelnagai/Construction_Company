import React from 'react';
import img from "../../image/гск 1.png";
import './DownloadMaterials.scss'
import iconSvg from "../../image/svg/Illustration.svg"
import iconSvg2 from "../../image/svg/Ellipse 103.svg"

const DownloadMaterials = () => {
    return (
        <div className="downloadMaterials pb-5 pt-4">
            <div className="container">
                <h2 className="pb-3">Скачать материалы ГСК</h2>
                <div className=" divContainer">
                    <div className="left d-flex align-items-center m-2">
                        <div className="col-4 col-md-5 d-flex justify-content-center p-2">
                            <img className="img-fluid photoElement" src={iconSvg} alt=""/>
                        </div>
                        <div className="col-5 ms-3">
                            <h4>Вы можете скачать пример договора с ГСК</h4>
                            <button className="btn btnWar">Скачать договор</button>
                        </div>
                    </div>
                    <div className="right d-flex  m-2">
                        <div className="col-4 col-md-5 d-flex  ">
                            <img className="img-fluid photoElement" src={iconSvg2} alt=""/>
                        </div>
                        <div className="col-5 divMd m-3">
                            <h4>Скачайте полный каталог продукции ГСК</h4>
                            <button className="btn btnWar">Скачать каталог</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DownloadMaterials;