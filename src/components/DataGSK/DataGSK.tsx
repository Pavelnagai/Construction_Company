import React from 'react';
import work1 from '../../image/workGSK/work-1.png'
import work2 from '../../image/workGSK/work-2.png'
import work3 from '../../image/workGSK/work-3.png'
import work4 from '../../image/workGSK/work-4.png'
import vector from '../../image/workGSK/Vector 1.png'
import photo from '../../image/workGSK/Photo.png'

import './DataGSK.scss'

const DataGsk = () => {
    return (
        <div className="dataGsk">
            <div className="container">
                <div className="calc">
                    <div className="row d-flex align-items-center">
                        <div className="col-6 cal">
                            <h3>Рассчёт цены бетона с доставкой на
                                карте</h3>
                            <button className="btn btn-light">Калькулятор доставки</button>
                        </div>
                        <div className="col-2">
                            <img style={{width: "252px", height: "108px"}} src={vector} alt=""/>
                        </div>
                        <div className="col-2">
                            <img style={{borderBottomRightRadius: "16px", borderTopRightRadius: "16px"}} src={photo}
                                 alt=""/>
                        </div>
                    </div>
                </div>

                <h2>Работы, выполненные ГСК</h2>
                <div className="row">
                    <div className="col-3"><img src={work1} alt="work1"/></div>
                    <div className="col-3"><img src={work2} alt="work2"/></div>
                    <div className="col-3"><img src={work3} alt="work3"/></div>
                    <div className="col-3"><img src={work4} alt="work4"/></div>
                </div>
            </div>
        </div>
    );
};

export default DataGsk;