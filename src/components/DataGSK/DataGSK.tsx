import React from 'react';
import work1 from '../../image/workGSK/work-1.png'
import work2 from '../../image/workGSK/work-2.png'
import work3 from '../../image/workGSK/work-3.png'
import work4 from '../../image/workGSK/work-4.png'
import vector from '../../image/svg/Arrow.svg'
import photo from '../../image/workGSK/Photo.png'
import photoMobily from '../../image/mobile/Photo.svg'
import vectorMobily from '../../image/mobile/Arrow.svg'

import './DataGSK.scss'

const DataGsk = () => {
    return (
        <div className="containerIndex">
            <One/>
            <h2 className="col-sm-12 h2DataGsk">Работы, выполненные ГСК</h2>
            <div className="row row-cols-2 row-cols-md-4 pb-4">
                <div className="mb-4"><img className="img-fluid" src={work1} alt="work1"/></div>
                <div className=""><img className="img-fluid" src={work2} alt="work2"/></div>
                <div className=""><img className="img-fluid" src={work3} alt="work3"/></div>
                <div className=""><img className="img-fluid" src={work4} alt="work4"/></div>
            </div>
        </div>
    );
};

export default DataGsk;

export const One = () => {
    return (
        <div className="calculation d-flex flex-column justify-content-center">
            <div className="dom">
                <div className="col-8 col-md-5">
                    <div className="">
                        <h2 className="h2Calc">Рассчёт цены бетона с доставкой на карте</h2>
                        <img className="img-fluid d-md-none" src={vectorMobily} alt=""/>
                        <button className="btn btn-light">Калькулятор доставки</button>
                    </div>
                </div>
                <div className="col-0 col-md-3">
                    <img className="d-none d-sm-block" src={vector} alt=""/>

                </div>
                <div className="photos">
                    <img className="d-none d-sm-block" src={photo} alt=""/>
                    <img className="d-md-none " src={photoMobily} alt=""/>
                </div>
            </div>
        </div>
    )
}